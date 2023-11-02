import "../index.css"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"
function Navigation(){
return(
    <div className="container">
<nav>
<ul>
    <img src="https://res.cloudinary.com/dasrniwpk/image/upload/v1698897737/WhatsApp_Image_2023-11-01_at_8.19.36_PM_wtie6m.jpg" alt="" />
    <li>
        James Mukumu
    </li>
    <li>
    Home
    </li>
    
    <li>
    About me
    </li>
   
    <li>
    what i do
    </li>
    
    <li>
    Projects
    </li>
    <div className="icons">
<i><AiFillFacebook  target="blank"  onClick={()=>{
window.location.href = "https://www.christiankonline.com/facebook-profile-url-tutorial/"


}}/></i>
    <i><AiOutlineGithub target="blank" onClick={()=>{
      window.location.href = "https://github.com/jamesmukumu/Chama"

    }}/></i>
    <i><FaInstagramSquare onClick={()=>{
        window.location.href = "https://www.instagram.com/philo_mitch"
    }}/></i>
    </div>
</ul>

</nav>

<div className="cent">
<div>
    
<img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />

</div>

</div>





</div>

)






}
export default Navigation