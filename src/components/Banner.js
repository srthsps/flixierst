import React, { useState, useEffect } from 'react'
import instance from '../models/axios'
import requests from '../utils/requests'
import './Banner.css'

const baseURL = "https://image.tmdb.org/t/p/original"

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchStuff() {
            const stuff = await instance.get(requests.fetchNetflixOriginals)
            setMovie(stuff.data.results[Math.floor(Math.random() * stuff.data.results.length - 1)])
        }
        fetchStuff()
    }, []);

    const truncate=(str,n)=>{
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }

    return (
        <header>
            <div className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("${baseURL}${movie?.backdrop_path}")`, backgroundPosition: "center center"
            }}>
                <div className="banner_content">
                    <h2 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h2>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <div className="banner_overview">
                        {truncate(movie?.overview,150)}
                    </div>
                </div>
                <div className="banner--fadeBottom"/>
            </div>
            
        </header>
    )
}

export default Banner
