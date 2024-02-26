import React,{useContext} from 'react'
import { NotificationsNone, ExitToAppRounded, Language, Settings, CenterFocusStrong } from '@mui/icons-material';
import { AuthContext } from '../../context/authcontext/AuthContext';
import { Logout } from '../../context/authcontext/ApiCalls';
import "./topbar.css"
const Topbar = () => {
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        Logout(dispatch);
      };
    
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">VinayAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarIconContainer">
                        <img src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" alt="" className='topAvatar' />
                    </div>
                    <button className="Logout"
                       onClick={handleLogout}
                    disabled={isFetching}><ExitToAppRounded/></button>

                </div>
            </div>
        </div>
    )
}

export default Topbar
