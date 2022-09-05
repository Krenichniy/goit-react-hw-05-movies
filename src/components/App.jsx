import { Menu } from "modules/Menu";
import { Homepage } from "pages/Homepage/Homepage";
import { Movies } from "pages/Movies/Movies";
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path ='/' element={<Homepage/>}></Route>
        <Route path ='/movies' element={<Movies/>}></Route>
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