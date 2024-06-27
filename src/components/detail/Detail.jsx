import React from 'react'
import './detail.css'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src='./avatar.png' />
        <h2>BamBam</h2>
        <p>Hello</p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Setting</span>
            <img src='./arrowUp.png' />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Privacy & Help</span>
            <img src='./arrowUp.png' />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared photos</span>
            <img src='./arrowDown.png' />
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img src='./avatar.png' />
                <span>sdfsfsd.png</span>
              </div>
              <img src='./download.png' className='icon' />
            </div>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src='./arrowUp.png' />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail