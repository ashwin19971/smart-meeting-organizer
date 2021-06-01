import { gql } from "@apollo/client";

export const BUILDINGS_QUERY = gql`
  {
    Buildings {
      id
      name
    }
  }
`;

export const MEETING_ROOMS_QUERY = gql` 
  {
    MeetingRooms {
      id
      name
      floor
      building {
        name
      }
      meetings {
        id
        title
        date
        startTime
        endTime
      }
    }
  }
`;

export const MEETINGS_QUERY = gql` 
  {
    Meetings {
      id
      title
      date
      startTime
      endTime
    }
  }
`;

export const getBuildingQuery = id => gql`
  {
    Building(id: ${id}){
      id
      name
      meetingRooms {
        id
        name
        floor
        meetings{
          id
          title
          date
          startTime
          endTime
        }
      }
    }
  }
`;

export const SCHEDULE_MEETING_QUERY = gql`
  mutation Meeting(
    $id: Int!,
    $title: String!,
    $date: String!,
    $startTime: String!,
    $endTime: String!,
    $meetingRoomId: Int!
  ) {
    Meeting(
      id: $id,
      title: $title,
      date: $date,
      startTime: $startTime,
      endTime: $endTime,
      meetingRoomId: $meetingRoomId
    ) {
      id,
      title
    }
  }
`;
