import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { Sidebar } from '../components';
import Search from '../components/Search';
import { fetchMovies } from '../features/movie/movieSlice';

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  });
  return (
    <>
      <Container>
        <Sidebar />
        <MainContainer>
          <Search />
          <Outlet />
        </MainContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  overflow-x: hidden;
  margin-bottom: 52px;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    /* margin-top: 0; */
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  margin: 64px 32px 52px 32px;

  @media (max-width: 768px) {
    margin: 0px 25px 25px 24px;
  }

  @media (max-width: 425px) {
    margin: 26px 16px 7px 16px;
  }
`;

export default RootLayout;
