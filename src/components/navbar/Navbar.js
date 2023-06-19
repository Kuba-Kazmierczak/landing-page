import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const links = [
    {label: "brand", path: "/"},
    {label: "about", path: "/about"},
    {label: "skills" , path: "/skills"},
    {label: "portfolio", path: "/portfolio"},
    {label: "contact", path: "/contact"}
  ]

  const renderedLinks = links.map((link) => {
    return <Link key={link.label} to={link.path}>
      <li className="navbar-link">{link.label}</li>
    </Link>
  });

  return (
    <div className='navbar'>
      {renderedLinks}
    </div>
  )
}

export default Navbar;

