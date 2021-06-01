import { useMutation, useQuery } from '@apollo/client';
import { get } from 'lodash';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { array, bool, func } from 'prop-types';

import Button from '../../../../components/Button';
import { formatDate, generateUniqueId, getFreeMeetingRooms, todayDate } from '../../../../utils/utilFunctions';
import { getBuildingQuery, SCHEDULE_MEETING_QUERY } from '../../api/index';
import './AddMeeting.scss';

ReactModal.setAppElement('body');

export const AddMeeting = ({ isModalOpen, toggleModal, buildings, isBuildingLoading }) => {

  const [isNextBtnClicked, clickNextBtn] = useState(false);
  const [bookingTitle, setBookingTitle] = useState('');
  const [bookingDate, setBookingDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [buildingId, selectBuilding] = useState();
  const [selectedRoomId, selectMeetingRoom] = useState();

  const { data: Building, loading: isBuildingInfoLoading } = useQuery(getBuildingQuery(buildingId || -1));
  const buildingInfo = get(Building, 'Building', {});
  const meetingRooms = get(buildingInfo, 'meetingRooms', []);
  const freeMeetingRooms = meetingRooms.length ? getFreeMeetingRooms(meetingRooms, formatDate(bookingDate), startTime, endTime) : [];

  const [scheduleMeeting, { loading: isMeetingScheduling }] = useMutation(SCHEDULE_MEETING_QUERY);

  const handleScheduleMeeting = () => {
    scheduleMeeting({
      variables:{
        id: generateUniqueId(),
        title: bookingTitle,
        date: formatDate(bookingDate),
        startTime: startTime,
        endTime: endTime,
        meetingRoomId: selectedRoomId
      }
    });
    !isMeetingScheduling && toggleModal(!isModalOpen);
  };

  return (
    <ReactModal
      overlayClassName='overlay'
      className='modal'
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick
    >
      {
        !isNextBtnClicked ?
          <div className='add-meeting-wrapper'>
            <h2>Add Meeting</h2>
            <div className='add-meeting-line-item'>
              <label htmlFor="booking-title">Title:</label>
              <input
                type="input"
                id="booking-title"
                name="booking-title"
                onChange={(e) => setBookingTitle(e.target.value)}
                value={bookingTitle}
              />
            </div>
            <div className='add-meeting-line-item'>
              <label htmlFor="booking-date">Date:</label>
              <input
                type="date"
                id="booking-date"
                name="booking-date"
                min={todayDate}
                onChange={(e) => setBookingDate(e.target.value)}
                value={bookingDate}
              />
            </div>
            <div className='add-meeting-line-item'>
              <label htmlFor="start-time">Start Time:</label>
              <input
                type="time"
                id="start-time"
                name="start-time"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />
            </div>
            <div className='add-meeting-line-item'>
              <label htmlFor="end-time">End Time:</label>
              <input
                type="time"
                id="end-time"
                name="end-time"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />
            </div>
            <div className='add-meeting-line-item'>
              <label htmlFor="building">Select Building:</label>
              {
                isBuildingLoading ?
                  'Loading...' :
                  <select
                    name="building"
                    value={buildingId}
                    onChange={(e) => selectBuilding(e.target.value)}
                  >
                    <option value="none" selected disabled hidden></option>
                    {
                      buildings.map(
                        ({ id, name }) =>
                          <option
                            key={id}
                            value={id}
                          >
                            {name}
                          </option>
                      )
                    }
                  </select>
              }
            </div>
            <Button
              onClick={() => clickNextBtn(!isNextBtnClicked)}
              disabled={!buildingId || !startTime || !endTime || !bookingDate || !bookingTitle}
              value="NEXT"
            />
          </div>
          :
          isBuildingInfoLoading ?
            'Loading...' :
            <div className='rooms-wrapper'>
              <h3>
                {
                  freeMeetingRooms.length ?
                    'Please select one of free rooms' :
                    'No free rooms are available. Please select another building'
                }
              </h3>
              {
                freeMeetingRooms.map(room => (
                  <div
                    className={
                      `rooms-info-block 
                      ${room.id === selectedRoomId ? 'selected-room' : ''}`
                    }
                    onClick={() => selectMeetingRoom(room.id)}
                  >
                    <p>{room.name}</p>
                    <p>{buildingInfo.name}</p>
                    <p>Floor: {room.floor}</p>
                  </div>
                ))
              }
              {freeMeetingRooms.length > 0 &&
                <Button
                  onClick={handleScheduleMeeting}
                  disabled={!selectedRoomId}
                  value="Schedule Meeting"
                />
              }
            </div>
      }
    </ReactModal>
  );
};

AddMeeting.propTypes = {
  isModalOpen: bool,
  toggleModal: func,
  buildings: array,
  isBuildingInfoLoading: bool,
};

AddMeeting.defaultProps = {
  isModalOpen: false,
  toggleModal: () => { },
  buildings: [],
  isBuildingInfoLoading: true
}

export default AddMeeting;
