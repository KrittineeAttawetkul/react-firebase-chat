import React, { useState } from 'react'
import './addUser.css'
import {db} from '../../../../lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const AddUser = () => {
  const [user,setUser] = useState(null)

  const handleSearch = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySanapShot = await getDocs(q);

      if(!querySanapShot.empty){
        setUser(querySanapShot.docs[0].data())
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='Username' name='username' />
        <button>Search</button>
      </form>
      {user && <div className='user'>
        <div className='detail'>
          <img src={user.avatar || './avatar.png'} />
          <span>{user.username}</span>
        </div>
        <button>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser