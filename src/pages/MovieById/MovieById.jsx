import { useEffect, useState } from "react";
import {   useLocation, useParams, useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { FetchMovieFromApi } from "components/FetchData/FetchData";
import { StyledBtn } from "pages/Movies/Movies.styled";
import styles from '../../modules/Menu/menu.module.css';
import { StyledNavLink, StyledNavContainer, StyledCardcontainer } from "./MovieById.styled";


export const MovieById = () => {
    const { id } = useParams();
    const [state, setSate] = useState({item:{}});
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
        const getMovie = async () => {
            setIsLoading(true);
            try {
                const response = await FetchMovieFromApi(id);
                setSate(item => ({ item: response }))
                console.log(response)
            }
            catch (error) {
                Notify.failure(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        getMovie();

        }, [id]);
    
    const { title, poster_path, name, overview, release_date, vote_average, genres } = state.item;
    const dateYears = release_date?.split('').slice(0, 4);
    const userScore = String(vote_average * 10).slice(0, 2);
    const location = useLocation();
    const from = location.state?.from || '/';
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <>
            <StyledBtn onClick={goBack} >
                <span className={styles.link}>
                    Go Back
                </span>
                
                {/* <Link to={'/'} className={styles.link}></Link> */}
            </StyledBtn>
            {isLoading && <Loader />}
            <StyledCardcontainer>
                <div>
                    <h2>{title} ({dateYears})</h2>
                    <p>User Score : {userScore} %</p>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="300" alt={name} />
                </div>
            {/* description */}
                <div>
                    <h3>Overview :</h3>
                    <p>{overview}</p>
                    <StyledNavContainer>Genres : <p>{genres?.map(el => el.name).join(' , ')}</p></StyledNavContainer>
                </div>
            </StyledCardcontainer>
            {/* additional info */}
            <h3>Additional information</h3>
            <StyledNavContainer>
                <StyledNavLink state={{ from }} to='cast' className={styles.link}>Cast</StyledNavLink>
                <StyledNavLink state={{ from }} to='reviews' className={styles.link}> Reviews</StyledNavLink>
            </StyledNavContainer>
        </>
    )
}