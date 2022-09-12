import { useState, useEffect } from 'react';
import { fetchAllVideoLibrary } from 'components/FetchData/FetchData'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { StyledLink, StyledMoviesList, StyledItem, StyledTitle } from './Homepage.styled';

export const Homepage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            try {
                const response = await fetchAllVideoLibrary();
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

    }, []);

    const movies = data?.map(({id, poster_path, title, name}) => {
        return <StyledItem key={id}>
            <StyledLink to={`/movies/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="200" height="300" />
                <StyledTitle > {title || name}</StyledTitle>
            </StyledLink>
        </StyledItem>
    });

    return ( 
        <div>
            <h2>Tranding today</h2>
            <StyledMoviesList >
                {isLoading && <Loader/> }
                {movies}
            </StyledMoviesList>
        </div>
    )
}