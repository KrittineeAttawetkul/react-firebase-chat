import "./userInfo.css"
// import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {

  // const { currentUser } = useUserStore();

  return (
    <div className='userInfo'>
      <div className="user">
        <img src='./avatar.png' />
        <h2>BamBam</h2>
        {/* <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2> */}
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default Userinfo