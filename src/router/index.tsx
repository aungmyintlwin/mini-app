import { createBrowserRouter} from 'react-router-dom';
import Home from '../screens/Home/Home';
import User from '../screens/User/User';
import ErrorPage from '../screens/ErrorPage/ErrorPage';
import Earn from '../screens/Earn/Earn';
import Friend from '../screens/Friend/Friend';
import Play from '../screens/Play/Play';
import PayOut from '../screens/PayOut/PayOut';


const routes: any = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/earn",
    element: <Earn/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/friend",
    element: <Friend/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/play",
    element: <Play/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/pay-out",
    element: <PayOut/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/user",
    element: <User/>,
    errorElement: <ErrorPage/>
  },
]);
export default routes


