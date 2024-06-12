import { Route, Routes} from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Home from '../pages/home';
import NotFound from '@/pages/NotFound/404';
import ProjectDetails from '@/pages/ProjectDetails';


function AppRoutes() {
  return (
      <Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:projectId" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Fragment>
  );
}   

export default AppRoutes;