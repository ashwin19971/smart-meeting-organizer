export const todayDate = new Date().toISOString().slice(0, -14);

export const getFreeRooms = rooms => {
  const currentTime = new Date();
  const freeRooms = rooms.filter(room => {
    const { meetings = [] } = room;
    for (let i = 0; i < meetings.length; i++) {
      const meetingStartTime = parseDate(meetings[i].date, meetings[i].startTime);
      const meetingEndTime = parseDate(meetings[i].date, meetings[i].endTime);
      if (getTimeInBetween(currentTime, meetingStartTime, meetingEndTime)) {
        return false;
      }
    }
    return true;
  });
  return freeRooms;
};

export const getTodayMeetings = meetings => {
  const todayStartTime = new Date();
  todayStartTime.setHours(0);
  todayStartTime.setMinutes(0);

  const todayEndTime = new Date();
  todayEndTime.setHours(23);
  todayEndTime.setMinutes(59);

  const todayMeetings = meetings.filter(meeting => {
    const {
      date,
      startTime,
      endTime
    } = meeting;
    const meetingStartTime = parseDate(date, startTime);
    const meetingEndTime = parseDate(date, endTime);
    return getTimeInBetween(meetingStartTime, todayStartTime, todayEndTime) || getTimeInBetween(meetingEndTime, todayStartTime, todayEndTime);
  });

  return todayMeetings;
};

export const getMeetingsGoingOnNow = meetings => { 
  const currentTime = new Date();
  const currentMeetings = meetings.filter(meeting => {
    const {
      date,
      startTime,
      endTime
    } = meeting;
    const meetingStartTime = parseDate(date, startTime);
    const meetingEndTime = parseDate(date, endTime);
    return getTimeInBetween(currentTime, meetingStartTime, meetingEndTime);
  });

  return currentMeetings;
}

const getTimeInBetween = (time, startTime, endTime) => time > startTime && time < endTime;

const parseDate = (date, time) => {
  const parts = date.split("/");
  const newDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  newDate.setHours(Number(time.split(":")[0]));
  newDate.setMinutes(Number(time.split(":")[1]));
  return newDate;
};

export const formatDate = date => {
  const parts = date.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const generateUniqueId = () => {
  let id = new Date().getTime();
  return Number(String(id).slice(6));
};

export const getFreeMeetingRooms = (rooms, bookingDate, bStartTime, bEndTime) => {
  const bookingStartTime = parseDate(bookingDate, bStartTime);
  const bookingEndTime = parseDate(bookingDate, bEndTime);
  const freeRooms = rooms.filter(room => {
    const { meetings = [] } = room;
    for (let i = 0; i < meetings.length; i++) {
      const meetingStartTime = parseDate(meetings[i].date, meetings[i].startTime);
      const meetingEndTime = parseDate(meetings[i].date, meetings[i].endTime);
      if (
        getTimeInBetween(bookingStartTime, meetingStartTime, meetingEndTime) ||
        getTimeInBetween(bookingEndTime, meetingStartTime, meetingEndTime)
      ) {
        return false;
      }
    }
    return true;
  });
  return freeRooms;
}
