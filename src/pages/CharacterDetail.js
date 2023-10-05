import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PeopleDetail from '../components/PeopleDetail'
import Spinner from '../components/Spinner'

const CharacterDetail = () => {
    const data = useParams()
    const initialState = {
        name: '',
        birth_year: '',
        eye_color: '',
        height: '',
        hair_color: '',
        mass:'',
        skin_color:'',
        starships:[],
        homeworld:''
    }
    const [characterDetail, setCharacterDetail] = useState(initialState)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`http://swapi.dev/api/people/${data.id}`)
        .then( ({data}) => {
            setCharacterDetail(data);
            setLoading(false);
        })
        .catch(e => {
            setLoading(false);
        })
    }, [data.id])

  return (
    loading ? <Spinner /> :
        <div className='row justify-content-center m-0 p-0'>
            <div className='w-auto align-items-center justify-content-center text-start text-white'>
                <h4>{characterDetail.name}</h4>
                <ul>
                    <li><pre><strong>Height:</strong> {characterDetail.height}</pre></li>
                    <li><pre><strong>Mass:</strong> {characterDetail.mass}</pre></li>
                    <li><pre><strong>Hair Color: </strong>{characterDetail.hair_color}</pre></li>
                    <li><pre><strong>Skin Color: </strong>{characterDetail.skin_color}</pre></li>
                    <li><pre><strong>Eye Color: </strong>{characterDetail.eye_color}</pre></li>
                    <li><pre><strong>Birth Year: </strong>{characterDetail.birth_year}</pre></li>
                </ul>
                <h4>Home World</h4>
                <ul>
                    {
                        <PeopleDetail resident={characterDetail.homeworld} baseUrl={'/planets'} />
                    }
                </ul>
                <h4>Star Ships</h4>
                <ul>
                    {
                        characterDetail.starships.map(r => <PeopleDetail resident={r} baseUrl={'/starships'} />)
                    }
                </ul>
            </div>
        </div>
  )
}

export default CharacterDetail
