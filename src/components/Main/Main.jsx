import React from 'react'
import './Main.css'
import { assets } from '../../assets/aassets'

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} className='w-10 h-auto rounded-full' alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on a upcoming road trip</p>
                        <img src={assets.compass_icon} className="w-10 h-auto" alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly sumarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} className="w-10 h-auto" alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} className="w-10 h-auto" alt="" />
                    </div>
                    <div className="card">
                        <p>Impove the readbility of the following</p>
                        <img src={assets.code_icon} className="w-10 h-auto" alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may inaccurate info, including about peoople, so double-check its resposes, Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main