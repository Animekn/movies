import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
const User = () => {
    return (
        <>
        <Topbar />
            <div style={{
                display: 'flex'

            }}>
                <Sidebar />

            <div className='user'>
                <div className="userTitleContainer">
                    <h1 className='userTitle'>Edit User</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=''
                                className='userShowImg' />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Jhon Wick</span>
                                <span className="userShowUserTitle">Software Engineer</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className='userShowIcon' />
                                <span className="userShowInfoTitle">jhonwick99</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className='userShowIcon' />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div>

                            <span className="userShowTitle">Contact Details</span>

                            <div className="userShowInfo">
                                <PhoneAndroid className='userShowIcon' />
                                <span className="userShowInfoTitle">+1 123 456 789</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className='userShowIcon' />
                                <span className="userShowInfoTitle">jhonwick99@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className='userShowIcon' />
                                <span className="userShowInfoTitle">New Delhi | India</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className='userUpdateTitle'>Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" placeholder='jhonwick99' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input type="text" placeholder='Jhon Wick' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input type="email" placeholder='+1 123 456 789' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input type="text" placeholder='Jhon Wick' className='userUpdateInput' />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input type="text" placeholder='New Delhi | India' className='userUpdateInput' />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="https://images.pexels.com/photos/4736678/pexels-photo-4736678.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
                                        className='userUpdateImg' />
                                    <label htmlFor="file"><Publish style={{ cursor: 'pointer' }} /></label>
                                    <input type="file" id='file' style={{ display: 'none' }} />
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default User
