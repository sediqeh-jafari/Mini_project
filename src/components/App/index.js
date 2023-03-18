import './style.css';
import picture1 from '../../Picture/picture1.jpg'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { router1 } from '../../Config';
// import Pagination from '../pagination';

function App() {
  const router = createBrowserRouter(router1)
  return (
  <div style={{ backgroundImage: `url(${picture1}) ` ,backgroundSize:'cover '}} className='app'>
      <RouterProvider router={router}/>
  </div>  
    
  
  );
}

export default App;
