import Recommended from '../components/Recommended';
import Trending from '../components/Trending';
import { useAppSelector } from '../app/hooks';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const { isLoading } = useAppSelector(state => state.movie);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Trending />
          <Recommended />
        </>
      )}
    </>
  );
};

export default Home;
