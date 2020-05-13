import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GiThermometerHot } from 'react-icons/gi';
class Header extends Component {
    constructor(props) {
        super(props);
        const width= window.innerWidth
        this.state = {
            isShow: true,
            width
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        debugger
        this.setState({width:window.innerWidth});
        if(this.state.width>=992){
            this.setState({isShow:true})
        }else{
            this.setState({isShow:false})
        }
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className='mainHeader' fixed="top" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto" className='navHeader'>
                        <Nav.Link className='navLinkItem' href="#info">INFO</Nav.Link>
                        <Nav.Link className='navLinkItem' href="#aplikacja">APLIKACJA</Nav.Link>
                        <Nav.Link className='navLinkItem' href="#urzadzenie">URZĄDZENIE</Nav.Link>
                       {this.state.isShow?<Navbar.Brand href="#home" className='navBrand'><div className='divInteligentnySad'> <GiThermometerHot />
                              INTELIGENTNY SAD </div>
                            <p className='sysCzujTemp'>System czujników temperatury</p>
                        </Navbar.Brand>:''} 
                        <Nav.Link className='navLinkItem' href="#alarmy">ALARMY</Nav.Link>
                        <Nav.Link className='navLinkItem' href="#gwarancja">GWARANCJA</Nav.Link>
                        <Nav.Link className='navLinkItem' href="#dostawa">DOSTAWA</Nav.Link>
                        <Nav.Link className='navLinkItem' href="#kontakt">KONTAKT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header