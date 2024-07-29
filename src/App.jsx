import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import AllMovies from './components/AllMovies';
import ComedyMovies from './components/ComedyMovies';
import SciFiMovies from './components/SciFiMovies';
import AnimationMovies from './components/AnimationMovies';
import ActionMovies from './components/ActionMovies';
import MainLayout from './components/MainLayout';
import MovieDetails from './components/MovieDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<AllMovies />} />
      <Route
        path='movies/:movieID'
        element={<MovieDetails />}
        errorElement={<h2>Movie not found!</h2>}
      />
      <Route path='comedy' element={<ComedyMovies />} />
      <Route path='scifi' element={<SciFiMovies />} />
      <Route path='animation' element={<AnimationMovies />} />
      <Route path='action' element={<ActionMovies />} />
      <Route path='/*' element={<h2>Page not found!</h2>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
