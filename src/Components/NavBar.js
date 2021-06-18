import React, {useState, useEffect} from 'react'
import "../App.css"
function NavBar(){
    return(
        <div className="Navbar">
        <div className="leftside">
        <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Feedback</a>
        </div>
        
        </div>
        <div className="rightside">
        <h2>New-York Times Most Popular Articles</h2>
         
               
        </div>
        </div>
    )
}

export default NavBar