import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Home from '../pages/home';


function AppRoutes() {
  return (
      <Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:projectId" element={<>TESTE</>} />
        </Routes>
      </Fragment>
  );
}   

export default AppRoutes;