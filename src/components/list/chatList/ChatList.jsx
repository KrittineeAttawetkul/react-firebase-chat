import React, { useState } from 'react'
import './chatList.css'

import AddUser from './addUser/addUser'

const ChatList = () => {

  const [addMode, setAddMode] = useState(false)

  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src='/search.png' />
          <input type='text' placeholder='Search' />
        </div>
        <img src={addMode ? './minus.png' : './plus.png'} className='add' onClick={() => setAddMode((prev) => !prev)} />
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className='texts'>
          <span>BamBam</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className='texts'>
          <span>BamBam</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className='texts'>
          <span>BamBam</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList