import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Home, Movies, TvSeries, Bookmarks } from './pages';
import Search from './pages/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='tv-series' element={<TvSeries />} />
      <Route path='movies' element={<Movies />} />
      <Route path='search' element={<Search />} />
      <Route path='bookmark-shows' element={<Bookmarks />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
