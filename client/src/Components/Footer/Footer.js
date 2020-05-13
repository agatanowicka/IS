import React, { Component } from "react";
import { FaRegCopyright } from 'react-icons/fa';
export class Footer extends Component {
    getCurrentDate(){
        let newDate = new Date()
        let year = newDate.getFullYear();
        return `${year}`
        }
    render() {
        return (
            <div className='footer'>
            <h3 className='footerHeading'> <FaRegCopyright className='footerIcon'/> Copyraight {this.getCurrentDate()}</h3> 
            </div>
        );
    }
}
export default Footer;