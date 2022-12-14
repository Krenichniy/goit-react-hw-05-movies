import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';
const Homepage = lazy(() => import("pages/Homepage/Homepage"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieById = lazy(() => import('./pages/MovieById/MovieById'));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews"));


export const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path ='/' element={<Homepage/>}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:id' element={<MovieById />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path ='*' element={<Homepage/>}></Route>
        </Routes>
        </Suspense>
    )
}