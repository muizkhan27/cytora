import React from 'react'
import { Link } from 'react-router-dom'

import { addFavourite, removeFavourite } from '../redux/starWarReducer'

const AbstractDetail = ({
        name, url, dispatch, favourites
    }) => {
    return (
      <div className='col-md-5 text-start mt-2 abstract-box d-flex justify-content-between'>
        <Link className='home-names' to={url}>{name}</Link>
        {
          url.includes('character') && (favourites.filter( val => val===url).length !== 0 ?
          <button type='button' className='favourite' onClick={() => dispatch(removeFavourite(url))}><img src="https://img.icons8.com/external-solid-adri-ansyah/64/FFFFFF/external-iphone-smartphone-apps-solid-adri-ansyah-32.png"/></button>:
          <button type='button' className='favourite' onClick={()=> dispatch(addFavourite(url))}>+</button>
            )
        }
      </div>
  )
}

export default AbstractDetail
