import { useState, useEffect } from 'react';
import { fetchAllVideoLibrary } from 'components/FetchData/FetchData'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { StyledLink, StyledMoviesList, StyledItem } from './Homepage.styled';

export const Homepage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            try {
                const response = await fetchAllVideoLibrary();
                console.log(response)
                setData(data => [...data, ...response.results])
            }
            catch (error) {
                Notify.failure(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        getMovies();

    }, [])
    return ( 
        <div>
            <h2>Tranding today</h2>
            <StyledMoviesList >
                {isLoading && Loader}

                {data?.map(element => {
                    return <StyledItem key={element.id}>
                        <StyledLink to={`/movies/${element.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} width="200" height="300"/>
                            <p> {element.title || element.name}</p>
                            
                        </StyledLink>
                    </StyledItem>
                })}
            </StyledMoviesList>
        </div>
    )
}