import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movielist = () => {

    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY
    const [movieRank, setMovieRank] = useState("");

    const getMovieData = async () => {
        try {
            const res = await axios.get("http://www.kobis.or.kr/kobisopenapi"
                +"/webservice/rest/boxoffice/searchDailyBoxOfficeList.json", {
                params: {
                    key: API_KEY,
                    targetDt: "20250611"
                }
            })
            
            const boxOfficeList = res.data.boxOfficeResult.dailyBoxOfficeList
            console.log(boxOfficeList)
            setMovieRank(
                boxOfficeList.map((movie, idx) => 
                    <div key={idx} className='movieDiv'>
                        {movie.rank}. {movie.movieNm} | {movie.openDt}
                    </div>
                )
            )
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(()=> {
        getMovieData()
    },[])

    return (
        <div>
            <h1>영화 순위</h1>
            <div className='movieListDiv'>
                {movieRank}
            </div>
        </div>
    )
}

export default Movielist