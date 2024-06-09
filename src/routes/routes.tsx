import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Home from '../pages/home';
import NotFound from '@/pages/404';


function AppRoutes() {
  return (
      <Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:projectId" element={<>TESTE</>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Fragment>
  );
}   

export default AppRoutes;