import React from 'react'

export const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick} className='rounded p-3  bg-slate-400 text-white'>{text}</button>
  )
}
