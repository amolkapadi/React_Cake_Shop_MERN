import React from 'react'
import axios from 'axios'
import Cakes from '../Cakes.json'
import fileDownload from 'js-file-download';


export default function Cake() {

  const download = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      fileDownload(res.data, "Menu.png");
    })
  }

  return (
    <div className='conatiner m-5'>
      <div className='d-flex m-5'>
        <button onClick={(e) => download(e)} className="btn btn-success ">Download</button>
        <h3 className=' text-center ms-5'>All Cake Flawor </h3><hr />
      </div>
      <div className='row p-5'>


        {Cakes.map((result) =>
          <div className='col-md-4'>
            <div class="card" >
              <img src={result.img} class="card-img-top" alt={result.name} />
              <div class="d-flex p-3">
                <h5 class="card-title"> {result.flawor}</h5>
                <h5 className='text-muted ms-auto'>{result.price}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
