import React from 'react'
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="flex justify-around items-center h-20 bg-green-100 shadow-lg">
      <h1 className="text-3xl italic font-semibold underline ">React Routers</h1>
      <nav>
        <ul className='nav flex gap-10 '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/Carts">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader