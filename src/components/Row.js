import React,{useState,useEffect} from 'react'
import instance from '../models/axios'
import './Row.css'

const Row = ({title,fetchUrl,isLargeRaw}) => {

    const baseURL="https://image.tmdb.org/t/p/original"
    
   const [movies,setMovies] = useState([])

    useEffect(()=>{
    
        instance.get(fetchUrl).then(res=>{
        const data = res.data.results
        setMovies(data)
        
    })

    },[])

    console.log(movies);

    return (
        <div className="rowOuter">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(m=>{
                    return(<img className="row_poster" key={m.id} src={`${baseURL}${isLargeRaw ? m.poster_path: m.backdrop_path}`} alt={m.name}/>)
                })}
            </div>
            

            
        </div>
    )
}

export default Row
