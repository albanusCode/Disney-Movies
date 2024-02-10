import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from 'react-icons/hi2'
import HeaderItem from './HeaderItem';

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
    name: 'HOME',
    icon: HiHome
    },
    {
    name: 'SEARCH',
    icon: HiMagnifyingGlass
    },
    {
    name: 'WATCH LIST',
    icon: HiPlus
    },
    {
    name: 'ORIGINALS',
    icon: HiStar
    },
    {
    name: 'MOVIES',
    icon: HiPlayCircle
    },
    {
    name: 'SERIES',
    icon: HiTv
    },
  ]
  return (
    <div className='flex items-center cursor-pointer justify-between px-5 sticky z-50 top-0 bg-[#242424] w-[100%]'>
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index<3 && (
            <HeaderItem key={item.name} name={''} Icon={item.icon}/>
          ))}
        </div> 
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-3'>
              {menu.map((item, index) => index>2 && (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
              ))}
            </div> : null}
        </div>
      </div>
      <div>
        <img src="https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4" alt="" 
        className='w-[40px] rounded-full'
        />
      </div>
    </div>
  );
}

export default Header;