import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/aassets'

const Sidebar = () => {
    
    const [extended, setExtended] = useState(false)

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu w-5 h-5" src={assets.menu_icon} alt="menu" />
                <div className="new-chat">
                    <img className="w-5 h-5" src={assets.plus_icon} alt="plus" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended
                ?<div className="recent">
                    <p className="recent-title">Recent</p>

                    <div className="recent-entry">
                        <img className="w-5 h-5" src={assets.message_icon} alt="message" />
                        <p className="">What is React ...</p>
                    </div>
                </div>
                :null
            }
                
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.setting_icon} alt="" />
                    {extended?<p>Setings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar