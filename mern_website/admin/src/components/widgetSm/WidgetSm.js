import React, { useEffect, useState } from 'react'
import "./widgetSm.css"
import axios from 'axios'
import { Visibility } from '@mui/icons-material'
const WidgetSm = () => {
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{
 const getNewUsers = async()=>{
   try{
    const res= await axios.get("/users?new=true",{
      headers: {
        token:
          "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFhZmM1NTc4YjVlMjIzZTY3ZmY4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTUwMDEwMn0.DyJMDgFkmEkTelz2iqw_Pv-eGhEArLM_0eaLBX4FaJ4",
      },
  });
   setNewUsers(res.data);
  }
  catch(err){
console.log(err);
  }
}
getNewUsers();
  },[])
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

      {newUsers.map(user=>(
        <li className="widgetSmListItem">
          <img src={user.profilePic||"https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"} alt="" className='widgetSmImg' />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{user.username}</span>
        </div>
        <button className="widgetSmButton">
        <Visibility className="widgetSmIcon"/>
        Display
        </button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default WidgetSm
