import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeAnime from './../../assets/home_anime.gif';
// import Modal from '../Modal/Modal';
import Typewriter from "typewriter-effect";

class Home extends Component {

    state = { showModal: false };

    // lifecycle element to show it after some time
    componentDidMount() {
        // console.log("Home is loaded");
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 2400);

    };

    // close the modal
    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div className="home-container">
                {/* {this.state.showModal && < Modal closeModal={this.closeModal} />} */}
                <div className="header-text glow">
                    <h1>Hello World</h1>
                    <p></p>
                    <br />
                </div>

                <div className="landing-container">
                    <div data-aos="fade-right" className="landing-left">
                        <h1 className="landing-header">Hey! I am Swaraj</h1>
                        <div className="typewriter-container">
                            <Typewriter
                                options={{
                                    strings: ["Programmer!", "Developer!", "Learner!", "Friend!"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <br /><br />
                    <div data-aos="fade-right" className="placed landing-left">
                        <h1 className='landing-header'>Placed at -</h1>
                            <div className="typewriter-container">
                                <Typewriter
                                    options={{
                                        strings: ["Accenture (Advanced ASE)", "Wipro (Turbo)", "Cognizant (GenC Elevate)", "Capgemini (Analyst)", "Infosys (System Engineer)", "Revature (SWE)"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                    </div>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Contact with me</p>
                    </Link>
                    <a href="https://drive.google.com/drive/folders/1BCPtVYge5c4aM4Lk2LyuldH46E3DUbZx?usp=sharing" className="btn btn-white">
                            <p className="btn-text">Download my CV</p>
                    </a>
                </div>
                <div className="splash-image">
                    <img
                        src={homeAnime}
                        alt="animation"
                        className="home-anime" />
                </div>



            </div>

        );
    }
}

export default Home;