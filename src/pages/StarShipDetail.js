import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PeopleDetail from '../components/PeopleDetail'
import Spinner from '../components/Spinner'

const CharacterDetail = () => {
    const data = useParams()
    const initialState = {
        name: '',
        model: '',
        manufacturer: '',
        cost_in_credits: '',
        length: '',
        max_atmosphering_speed:'',
        crew:'',
        passengers: '',
        cargo_capacity: '',
        consumables: '',
        starship_class: '',
        pilots:[]
    }
    const [starshipDetail, setStarShipDetail] = useState(initialState)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`http://swapi.dev/api/starships/${data.id}`)
        .then( ({data}) => {
            setStarShipDetail(data);
            setLoading(false);
        })
        .catch(e => {
            setLoading(false);
            console.log(e);
        })
    }, [data.id])

  return (
    loading ? <Spinner /> : 
        <div className='container'>
        <div className='row justify-content-center m-0 p-0'>
            <div className='w-auto align-items-center justify-content-center text-start text-white'>
                <h4>{starshipDetail.name}</h4>
                <ul>
                    <li><pre><strong>Model:</strong>{starshipDetail.model}</pre></li>
                    <li><pre><strong>Manufacturer:</strong>{starshipDetail.manufacturer}</pre></li>
                    <li><pre><strong>Cost in Credits:</strong>{starshipDetail.cost_in_credits}</pre></li>
                    <li><pre><strong>Length:</strong>{starshipDetail.length}</pre></li>
                    <li><pre><strong>Max Atmosphering Speed:</strong>{starshipDetail.max_atmosphering_speed}</pre></li>
                    <li><pre><strong>Crew:</strong>{starshipDetail.crew}</pre></li>
                    <li><pre><strong>Passengers:</strong>{starshipDetail.passengers}</pre></li>
                    <li><pre><strong>Cargo Capacity:</strong>{starshipDetail.cargo_capacity}</pre></li>
                    <li><pre><strong>Consumables:</strong>{starshipDetail.consumables}</pre></li>
                    <li><pre><strong>Star Ship Class:</strong>{starshipDetail.starship_class}</pre></li>
                </ul>
                <h4>Pilots</h4>
                <ul>
                    {
                        starshipDetail.pilots.map(pilot => <PeopleDetail resident={pilot} baseUrl={'/characters'} />)
                    }
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default CharacterDetail
