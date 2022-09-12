import { Menu } from "modules/Menu/Menu";
import { Homepage } from "pages/Homepage/Homepage";
import { Movies } from "pages/Movies/Movies";
import { Routes, Route } from 'react-router-dom';
import { MovieById } from '../pages/MovieById/MovieById';
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path ='/' element={<Homepage/>}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:id' element={<MovieById />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path ='*' element={<Homepage/>}></Route>
      </Routes>

    </div>
  );
};
// test
  // style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}