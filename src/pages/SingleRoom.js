import React, { Component } from 'react';

// Images
import defaultBcg from '../images/room-1.jpeg';

// Components
// import Hero from '../components/Hero';
import Banner from '../components/Banner';

// Router 
import {Link} from 'react-router-dom';

// Context
import {RoomContext} from '../context';

// Styled
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    // componentDidMount(){}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
       
        // If there is not room to render
        if(!room){
            return(
                <div className="error">
                    <h3>no such room could be found </h3>
                    <Link to='/rooms' className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        const [mainImg, ...defaultImg] = images;

        return (
            <React.Fragment>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>                
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index ) => {
                            return(  <img key={index} src={item} alt={name} title={name} /> );
                            })}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>

                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>Max. capacity: {capacity} {
                                capacity > 1 ? 'people' : 'person'
                            }</h6>
                            <h6>{pets ? '' : 'no'} {'pets allowed'} </h6>
                            <h6>{breakfast ? 'free breakfast' : ''}</h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return(
                                <li key={index}>- {item}</li>
                            )
                        })}
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}
