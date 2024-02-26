
import React from 'react'
import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

const Watch = () => {
  // const { id } = useParams()

  const location = useLocation()
  // const movie =location.movie
  // console.log(location.state.trailer)

  return (
    <div className='watch'>
      <Link to="/">
        <div className='back'>
          <ArrowBackOutlined />
          Home
        </div></Link>
      <video className='video'
        autoPlay
        progress
        controls
        src={location.state.trailer} />
    </div>
  )
}

export default Watch
