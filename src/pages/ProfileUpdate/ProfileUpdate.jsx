import React,{useState} from 'react'
import './ProfileUpdate.css'
import avatar from './images/avatar_icon.png'

const ProfileUpdate = () => {

  const [image, setImage] = useState(false);
  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])}
            type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
            <img src={image? URL.createObjectURL(image) : avatar} alt="profile" />
            update your profile
          </label>
          <input type="text" placeholder='Your name' required />
          <textarea placeholder='Write profile bio' required rows={6}></textarea>
          <button type="submit">Save</button>
        </form>

      </div>
    </div>
  )
}

export default ProfileUpdate
