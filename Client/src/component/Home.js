import React from 'react'

export default function Home() {
  const img="https://img.freepik.com/free-vector/bakery-sale-banner-template_23-2149398028.jpg?w=2000"
  return (
    <div className='conatiner'>

          <img src={img} alt="img" className="img-fluid home-img" />
  
    </div>
  )
}
