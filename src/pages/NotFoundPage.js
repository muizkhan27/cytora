import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div class="d-flex align-items-center justify-content-center ">
        <div class="text-center">
            <h1 class="display-1 fw-bold text-white">404</h1>
            <p class="fs-3 text-white"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead text-white">
                The page you’re looking for doesn’t exist.
                </p>
            <Link to={'/characters'} className="btn">Go Home</Link>
        </div>
    </div>
  )
}

export default NotFoundPage