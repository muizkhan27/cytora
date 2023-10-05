import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PeopleDetail = ({resident, baseUrl}) => {
    const [people, setPeople] = useState({ name: '', url: ''})
    useEffect(() => {
      axios.get(resident)
      .then(({data}) => {
        setPeople(data)
      })
      .catch(e => {
        console.log(e);
      })
    }, [resident])
    
  return (
    <li><Link to={`${baseUrl}/${(people.url).split("/").splice(-2)[0]}`}>{people.name}</Link></li>
  )
}

export default PeopleDetail
