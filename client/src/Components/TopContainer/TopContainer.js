import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TopContainer extends Component {
    render() {
        return (
            <div className='topContainerBackground' id='home'>
                <div className='topContainerContent'>
                    <h2 className='topContainerHeading'>INTELIGENTNY SAD</h2>
                    <h5 className='topContainerHeading2'>Temperatura już nigdy nie będzie tajemnicą.</h5>
                   <a href='#placeOfUse'> <Button className='dowiedzSieWiecejButton' variant="outline-light"><p className='dowiedzSieWiecejHeading'>DOWIEDZ SIĘ WIĘCEJ</p></Button></a>
                </div>
            </div>
        )
    }
}
export default TopContainer