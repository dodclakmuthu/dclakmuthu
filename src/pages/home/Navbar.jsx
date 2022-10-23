import React,{useState} from 'react'
import './Navbar.css'

function Navbar() {

  const [isShowMenu, setisShowMenu] = useState(false);


  return (
    <div className='navbar'>
      <div className={`burger ${isShowMenu ? "burger-active" : ""}`} onClick={()=>setisShowMenu(!isShowMenu)}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <ul className={`nav-items ${isShowMenu ? "show-navbar" : ""}`}>
        <li>Projects</li>
        <li>Technologies I Know</li>
        <li>wanna Contact?</li>
        <li>Who am I?</li>
      </ul>
    </div>
  )
}

export default Navbar;
