import React, { Component } from 'react'

// Context
import {RoomContext} from '../context';

// Images
import Loading from './Loading';

// Components
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms : rooms } = this.context;
        // const {name, greeting} = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />

                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
