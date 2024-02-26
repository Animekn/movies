import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../Components/navebar/Navbar'
import Featured from '../../Components/featured/Featured'
import List from '../../Components/list/List'
import axios from "axios"
const Home = ({type}) => {

    const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTkyNzU2ODg0NWM1MzZiMTI5ZDhhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Nzc2NzU4NywiZXhwIjoxNjg4MTk5NTg3fQ.8ajVUCoCdsF-B4yhXneY64BWepU3hwAEn_cU5FUIpWM

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFhZmM1NTc4YjVlMjIzZTY3ZmY4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTUwMDEwMn0.DyJMDgFkmEkTelz2iqw_Pv-eGhEArLM_0eaLBX4FaJ4",
            },
          }
        );
        // console.log(res)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

    


  return (
    <div className='home'>
  <Navbar/>
  <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
{/* we will use map function to map our list inted of direct passing a list component */}
    </div>
  )
}

export default Home
