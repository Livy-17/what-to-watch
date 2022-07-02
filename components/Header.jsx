import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  return ( 
    <div className='flex w-full h-10 bg-red-100 items-center justify-between pl-10 pr-10'>
      <p>WhatToWatch</p>
      <div className='flex flex-row items-center justify-center'>
        <input />
        {/* <HiOutlineSearch className='ml-1 mr-1'/> */}
        <div>Hi</div>
      </div>
    </div>
   );
}
 
export default Header;