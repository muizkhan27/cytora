import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AbstractDetail from '../components/AbstractDetail'

import { useSelector, useDispatch } from 'react-redux'
import { updateLoading } from '../redux/starWarReducer'
import Spinner from '../components/Spinner'


const Home = () => {
    const [starWars, setStarWars] = useState([])
    
    const [searchInput, setSearchInput] = useState('')
    const [searchData, setSearchData] = useState([])
    const [isSearch, setIsSearch] = useState(false)

    const favourites = useSelector((state) => state.favourites)
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch()

    const data = window.location.pathname.split("/")[1] === '' ? 'characters' : window.location.pathname.split("/")[1]

    useEffect(() => {
        dispatch(updateLoading(true));
        axios.get(`http://swapi.dev/api/${data === 'characters' ? 'people' : data}/`)
        .then( ({data}) => {
            setStarWars(data.results);
            dispatch(updateLoading(false))
        })
        .catch(e => {
            dispatch(updateLoading(false))
        })
    }, [data])

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value);

        if(e.target.value === ''){
            setIsSearch(false);
        }
    }

    const searchCharacter = () => {
        if( searchInput === '' ) return;
        dispatch(updateLoading(true))

        let data = []
        for(let people of starWars){
            if(people.name.toLowerCase().includes(searchInput.toLowerCase())){
                data.push(people);
            }
        }
        setSearchData(data);
        setIsSearch(true);

        dispatch(updateLoading(false))
    }
  return (
    <div className='container'>
        <form className="d-flex justify-content-center">
            <div className='w-50 d-flex'>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={(e) => searchInputHandler(e)}/>
                <button className="btn btn-outline-success" type="button" onClick={() => searchCharacter()}>Search</button>
            </div>
        </form>
        
        <div className='row flex-column align-items-center'>
            {
                loading ? <Spinner /> : 
                (isSearch === true ? searchData.map(starWar => <AbstractDetail key={starWar.url.split("/").slice(-2)[0]} name={starWar.name} url={`/${data}/${starWar.url.split("/").slice(-2)[0]}`} dispatch={dispatch} favourites={favourites}/>) :
                starWars.map(starWar => <AbstractDetail key={starWar.url.split("/").slice(-2)[0]} name={starWar.name} url={`/${data}/${starWar.url.split("/").slice(-2)[0]}`} dispatch={dispatch} favourites={favourites}/>))
            }
        </div>
    </div>
  )
}

export default Home
