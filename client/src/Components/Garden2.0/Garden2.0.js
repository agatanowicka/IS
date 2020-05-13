import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { GiFruitTree } from 'react-icons/gi';
class Garden20 extends Component {
    render() {
        return (
            <div>
                <div className='gardenContainerBackground'>
                    <h1 className='gardenHeading'>INTELIGENTNY SAD 2.0</h1>
                    <div className='gardenContent'>
                        <h6 className='gardenContentItem'><GiFruitTree />  dostęp do aktualnej temperatury</h6>
                        <h6 className='gardenContentItem'> <GiFruitTree />  urządzenie mobline dzięki komunikacji GSM oraz pojemnym bateriom</h6>
                        <h6 className='gardenContentItem'> <GiFruitTree />  polska aplikacja</h6>
                        <h6 className='gardenContentItem'><GiFruitTree />  system powiadamiania o zmianach temperatury</h6>
                        <h6 className='gardenContentItem'> <GiFruitTree />  wiele czujników temperatury</h6>
                        <h6 className='gardenContentItem'> <GiFruitTree />  wysoka dokładność czujników temperatury</h6>
                        <h6 className='gardenContentItem'> <GiFruitTree />  przechowywanie pełnej historii pomiarów</h6>
                        <h6 className='gardenContentItem' > <GiFruitTree />  24-miesięczna gwarancja</h6>
                    </div>
                </div>
            </div>
        )
    }
}
export default Garden20