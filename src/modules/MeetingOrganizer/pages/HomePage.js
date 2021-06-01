import React, { useState } from 'react';
import { get } from 'lodash';
import { useQuery } from '@apollo/client';

import AddMeeting from '../components/AddMeeting';
import Button from '../../../components/Button';
import { BUILDINGS_QUERY, MEETING_ROOMS_QUERY, MEETINGS_QUERY } from '../api/index';
import { getFreeRooms, getMeetingsGoingOnNow, getTodayMeetings } from '../../../utils/utilFunctions';
import './HomePage.scss';

const HomePage = () => {
  const [isModalOpen, toggleModal] = useState(false);

  const { data: Buildings, loading: isBuildingLoading } = useQuery(BUILDINGS_QUERY);
  const { data: MeetingRooms, loading: isRoomLoading } = useQuery(MEETING_ROOMS_QUERY);
  const { data: Meetings, loading: areMeetingsLoading } = useQuery(MEETINGS_QUERY);

  const buildings = get(Buildings, 'Buildings', []);

  const meetingRooms = get(MeetingRooms, 'MeetingRooms', []);
  const freeRoomsNow = getFreeRooms(meetingRooms);

  const meetings = get(Meetings, 'Meetings', []);
  const todayMeetings = getTodayMeetings(meetings);
  const currentMeetings = getMeetingsGoingOnNow(meetings);

  return (
    <div className="home-page">
      <div className='info-block'>
        <p>Buildings: </p>
        <p>Total: {isBuildingLoading ? 'Loading...' : buildings.length}</p>
      </div>
      <div className='info-block'>
        <p>Rooms: </p>
        <p>Total: {isRoomLoading ? 'Loading...' : meetingRooms.length}</p>
        <p>Free Now: {isRoomLoading ? 'Loading...' : freeRoomsNow.length}</p>
      </div>
      <div className='info-block'>
        <p>Meetings: </p>
        <p>Total: {areMeetingsLoading ? 'Loading...' : meetings.length}</p>
        <p>Today: {areMeetingsLoading ? 'Loading...' : todayMeetings.length}</p>
        <p>Total: {areMeetingsLoading ? 'Loading...' : `${currentMeetings.length} Going on now`}</p>
      </div>
      <Button
        onClick={() => toggleModal(!isModalOpen)}
        value="ADD MEETING"
      />
      {
        isModalOpen &&
        <AddMeeting
          isModalOpen={isModalOpen}
          toggleModal={() => toggleModal(!isModalOpen)}
          buildings={buildings}
          isBuildingLoading={isBuildingLoading}
        />
      }
    </div>
  );
};

export default HomePage;

