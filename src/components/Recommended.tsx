import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { ApiData } from '../types/DataType';

import MovieList from './MovieList';

const Recommended = () => {
  const { recomendedMovies } = useAppSelector(state => state.movie);
  return (
    <>
      <Title>Recommended for you</Title>
      <Container>
        {recomendedMovies?.map((item: ApiData) => (
          <MovieList item={item} key={item.title} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(6, 0fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;

  /* @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 40px;
    grid-row-gap: 90px;
  } */

  @media (min-width: 1900px) {
    grid-template-columns: repeat(5, 0fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 90px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 35px;
    grid-row-gap: 50px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 15px;
    grid-row-gap: 40px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};
  line-height: 40px;
  margin-top: 40px;

  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Heading.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Heading.Medium.fontWeight};
  }
`;

export default Recommended;
