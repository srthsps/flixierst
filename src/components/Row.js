import React,{useState,useEffect} from 'react'
import instance from '../models/axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({title,fetchUrl,isLargeRaw}) => {

    const baseURL="https://image.tmdb.org/t/p/original"
    
   const [movies,setMovies] = useState([])
   const [trailerUrl,setTrailerUrl]= useState("")

    useEffect(()=>{
    
        instance.get(fetchUrl).then(res=>{
        const data = res.data.results
        setMovies(data)
        
    })

    },[])

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
            host:"https://www.youtube.com",
            origin:"https://localhost:3000"

        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie.name || "").then(url=>{
                let urlParams = new URL(url).search
                urlParams = new URLSearchParams(urlParams)
                urlParams= urlParams.get("v")
                setTrailerUrl(urlParams)
                
            })
            
            .catch((error)=>console.log(error))
        }
    }


    return (
        <div className="rowOuter">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(m=>{
                    return(<img onClick={()=>handleClick(m)} className="row_poster" key={m.id} src={`${baseURL}${isLargeRaw ? m.poster_path: m.backdrop_path}`} alt={m.name}/>)
                })}
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>            
        </div>
    )
}

export default Row
