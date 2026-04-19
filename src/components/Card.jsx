import React from 'react'
import Liked from './Liked'

const Card = (props) => {
    return (
    <div>
        <a  href={props.elem.url} target='_blank'>
            <div className='h-50 w-55 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src= {props.elem.download_url} alt="" />
        </div>
            </a>

        <div className='flex items-center justify-between mt-2'>
            <h2 className='font-bold text-lg '>{props.elem.author} </h2>
        < Liked />
        </div>

    </div>
  )
}

export default Card