import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export class Alarms extends Component {
    render() {
        return (
            <div className='alarms' id='alarmy'>
                <div className='alarmsContent'>
                    <h1 className='alarmsHeading' >ALARMY</h1>
                    <p className='alarmsText'>Wyróżniającą nasz produkt funkcjonalnością jest możliwość ustawienia alarmów przekroczenia lub spadku temperatury poniżej zdefiniowanej wartości. Każde urządzenie może mieć zdefiniowane aż do 6 takich zdarzeń. Pozwala to na uniknięcie konieczności spoglądania co chwilę w ekran w obawie przed nadchodzącymi przymrozkami, upałami bądź zepsuciem się chłodni.</p>

                    <p className='alarmsText'>Powiadomienia przychodzą w aplikacji bądź są wysyłane poprzez wiadomość SMS. Alarmy możemy ustawić dla każdego sensora z poziomu widoku szczegółowego. </p>
                </div>
            </div>
        );
    }
}
export default Alarms;