import React, { useEffect, useState } from 'react'
import './featured.scss'
import cover1 from '../images/cover1.jpg'
import movie1 from '../images/title1.png'
import axios from "axios";
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
// we take a parameter type inside featured funtion to select whether it is a movie or series
export default function Featured({type}) {

    const [content,setContent]=useState({});  
    useEffect(()=>{
     const getRandomContent = async ()=>{
        try{
           const res =await axios.get(`/movies/random?type=${type}`,
           {
            headers: {
              token:
              "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFhZmM1NTc4YjVlMjIzZTY3ZmY4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTUwMDEwMn0.DyJMDgFkmEkTelz2iqw_Pv-eGhEArLM_0eaLBX4FaJ4",
            },
          })
        setContent(res.data[0])
        }catch(err){
           console.log(err)
        }
     }
getRandomContent()
    },[type])
// console.log(content)
    return (
        <div className='featured'>
        
        {/* using type */}
        {type && (
            <div className='category'>
            {/* if the type will be movie then our title will be Movies and if it is not movies then it will be  Series */}
                <span>{type ==="movie" ? "Movies" : "Series"}</span>
               {/* creating option for genre */}
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="histotical">Histotical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}


            {/* Creating a Background cover Photo */}
            <img src={content.img} alt='' style={{ width: '100%', height: '100%' }} />
            <div className='info'>
                <img src={content.imgTitle} alt="" style={{ width: '50%', height: '50%' }} />
                
                {/* desc is for discription */}
                <span className='desc'>{content.desc}</span>
               
                {/* there are 2 buttons play and more */}
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
