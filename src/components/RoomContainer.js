import React from 'react'

// Comnponents
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

// Context
import {withRoomConsumer} from '../context';

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading />;
    }

    return(
        <React.Fragment>
            hello from rooms container
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </React.Fragment>
    );
}

export default withRoomConsumer(RoomContainer)








// import React from 'react'

// // Comnponents
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from './Loading';

// // Context
// import {RoomConsumer} from '../context';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const{loading, sortedRooms, rooms} = value;

//                     if(loading){
//                         return <Loading />;
//                     }

//                     return(
//                         <div>
//                             hello from rooms container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>        
//     );
// }
