import React from 'react'
import {  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    PlayCircleOutline} from "@mui/icons-material"
import "./sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>

            <Link to="/" style={{textDecoration:"none",color:"black"}}>
                <li className='sidebarListItem active'>
                  <LineStyle className='sidebarIcon'/>
                  Home
                </li>
                </Link> 
                <li className='sidebarListItem'>
                  <Timeline className='sidebarIcon'/>
                 Analytics
                </li>
                <li className='sidebarListItem'>
                  <TrendingUp className='sidebarIcon'/>
                  Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'> 
            <Link to="/users" style={{textDecoration:"none",color:"black"}}>
                <li className='sidebarListItem '>
                  <PermIdentity className='sidebarIcon'/>
                  Users
                </li>
                </Link>
                
            <Link to="/movies" style={{textDecoration:"none",color:"black"}}>
                <li className='sidebarListItem'>
                  <PlayCircleOutline className='sidebarIcon'/>
                  Movies
                </li>
                </Link>
                <li className='sidebarListItem'>
                  <AttachMoney className='sidebarIcon'/>
                  Transitions
                </li>
                <li className='sidebarListItem '>
                  <BarChart className='sidebarIcon'/>
                  Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'> 
                <li className='sidebarListItem '>
                  <MailOutline className='sidebarIcon'/>
                  Mail
                </li>
                <li className='sidebarListItem'>
                  <DynamicFeed className='sidebarIcon'/>
                 Feedback
                </li>
                <li className='sidebarListItem'>
                  <ChatBubbleOutline className='sidebarIcon'/>
                  Messages
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'> 
                <li className='sidebarListItem '>
                  <WorkOutline className='sidebarIcon'/>
                  Manage
                </li>
                <li className='sidebarListItem'>
                  <Timeline className='sidebarIcon'/>
                 Analytics
                </li>
                <li className='sidebarListItem'>
                  <Report className='sidebarIcon'/>
                  Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
