import React, { Component } from "react";
import './App.css';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import PlaceOfUse from './Components/PlaceOfUse/PlaceOfUse';
import AboutSystem from './Components/AboutSystem/AboutSystem';
import Garden20 from './Components/Garden2.0/Garden2.0';
import Device from './Components/Device/Device';
import Aplication from './Components/Aplication/Aplication';
import Alarms from './Components/Alarms/Alarms';
import Delivery from './Components/Delivery/Delivery';
import Warranty from './Components/Warranty/Warranty';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

export class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loader />
    }
    return (
      <div className="App">
        <Header />
        <div className='cutView'>
        <TopContainer />
        <PlaceOfUse />
        <AboutSystem />
        <Garden20 />
        <Aplication />
        <Device />
        <Alarms />
        <Warranty />
        <Delivery />
        <Contact />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
