import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils/UserContex';

const Footer = () => {

  const {user} = useContext(UserContext);
  return (
    <div className='text-center bg-slate-600'>
      <h4 className='p-6 text-lg font-semibold text-yellow-300'>🧡 {user.name} </h4>
    </div>
  )
}

export default Footer
