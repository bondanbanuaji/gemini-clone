import React, { useState, useContext } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const { darkMode, toggleDarkMode } = useContext(Context);

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu w-5 h-5" src={assets.menu_icon} alt="menu" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img className="w-5 h-5" src={assets.plus_icon} alt="plus" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                    <img className="w-5 h-5" src={assets.message_icon} alt="message" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                    : null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry" onClick={toggleDarkMode}>
                    <img className="w-5 h-5" src={darkMode ? assets.sun_icon : assets.moon_icon} alt="" />
                    {extended ? <p>{darkMode ? "Light Mode" : "Dark Mode"}</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-5 h-5" src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar