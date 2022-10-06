import React from 'react'
import "./Home.css";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
    <div className="footer" >
      <p>RANDOMIZED COLOR LAB<br></br>
      © Kiran Amin Panjwani</p>
     <div className='github-icon '><GitHubIcon sx={{ fontSize: 40, cursor:"pointer" }} onClick={()=> window.location.href=`https://github.com/KiranAminPanjwani/Randomized-Color-Lab`}/></div>
    </div>
  );
  
  export default Footer;
