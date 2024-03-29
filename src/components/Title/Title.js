import React from 'react';
import './title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className = "Title">
      <h1>SFPOPOS</h1>
      <div className = "Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
      <div>
      <NavLink 
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
        to="/">
          List
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
        to="/about">
          About
      </NavLink>
      <RandomSpace />
        </div>
    </div>
  )
}

export default Title