import React from 'react'

export default function PageNotFound() {
    const img="https://www.pngitem.com/pimgs/m/162-1622413_4chan-404-pages-hd-png-download.png"
  return (
    <div className='conatiner ps-5'>
        <img src={img} alt='pagenot' width={'100%'} className='img-fluid'/>
    </div>
  )
}
