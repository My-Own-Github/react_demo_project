import React from 'react';
import './menuStyle.css';
import { Link } from 'react-router-dom'

const MenuPage = () =>{
    return (
        <div className="MenuStyle">
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='employesList'>Employes Page</Link></li>
            </ul>
        </div>
    )
}
export default MenuPage;