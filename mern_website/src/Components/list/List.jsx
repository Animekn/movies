import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import Listitem from '../listitem/Listitem'

// we have pass the list parameter from an home.jsx to change the title of list istead of just continuw to watch

// now we will create a continue to watch option
const List = ({ list }) => {

  // console.log(list)

  const [isMoved, setIsMoved] = useState(false)
  // slidenumber is only for not move before 0th index
  const [slideNumber, setSlideNumber] = useState(0)
  // we created a handle click function for moving forword/backword in moviesection 
  const listRef = useRef()
  const handleClick = (direction) => {
    setIsMoved(true)
    // we can check getBoundingClientRect() function by doing console log this function shows the position of ur container from right and top
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      // translate is used to move forword a container 
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === "right" && slideNumber <5) {
      // translate is used to move forword a container 
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translate(${-230 + distance}px)`
    }

  }
  return (
    <>
      <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className='slideArrow left'
            onClick={() => handleClick('left')}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            {/*i will again use list map functon istead of givin indexing  */}
            {
              list.content.map((item, i) => (
                <Listitem index={i} item={item} />
              ))}

          </div>
          <ArrowForwardIosOutlined
            className='slideArrow right'
            onClick={() => handleClick('right')} />
        </div>
      </div>

    </>
  )
}

export default List
