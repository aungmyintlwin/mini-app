import { createBrowserRouter} from 'react-router-dom';
import Home from '../screens/Home/Home';
import User from '../screens/User/User';
import ErrorPage from '../screens/ErrorPage/ErrorPage';


const routes: any = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/user",
    element: <User/>,
    errorElement: <ErrorPage/>
  },
]);
export default routes


