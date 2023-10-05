import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PeopleDetail from '../components/PeopleDetail'
import Spinner from '../components/Spinner'

const PlanetDetail = () => {
    const data = useParams()
    const initialState = {
        name: '',
        rotation_period: '',
        orbital_period: '',
        diameter: '',
        climate: '',
        gravity:'',
        terrain:'',
        surface_water:'',
        diamter:'',
        population:'',
        residents:[]
    }
    const [planetData, setPlanetData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`http://swapi.dev/api/planets/${data.id}`)
        .then( ({data}) => {
            setPlanetData(data);
            setLoading(false);
        })
        .catch(e => {
            setLoading(false);
            console.log(e);
        })
    }, [data.id])

  return (
    loading ? <Spinner /> : <div className='container'>
        <div className='row justify-content-center m-0 p-0'>
            <div className='w-auto align-items-center justify-content-center text-start text-white'>
                    <h4>{planetData.name}</h4>
                    <ul>
                        <li><pre><strong>Climate:</strong> {planetData.climate}</pre></li>
                        <li><pre><strong>Population:</strong> {planetData.population}</pre></li>
                        <li><pre><strong>Diamter:</strong> {planetData.diameter}</pre></li>
                        <li><pre><strong>Gravity:</strong> {planetData.gravity}</pre></li>
                        <li><pre><strong>Orbital Period:</strong> {planetData.orbital_period}</pre></li>
                        <li><pre><strong>Rotation Period:</strong> {planetData.rotation_period}</pre></li>
                        <li><pre><strong>Surface Water:</strong> {planetData.surface_water}</pre></li>
                        <li><pre><strong>Terrain:</strong> {planetData.terrain}</pre></li>
                    </ul>
                    <h4>Residents</h4>
                    <ul>
                        {
                            planetData.residents.map(r => <PeopleDetail key={r.name} resident={r} baseUrl={'/characters'}/>)
                        }
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default PlanetDetail
