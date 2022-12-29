import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import MovieList from '../components/MovieList';

const TvSeries = () => {
  const { tvSeriesData } = useAppSelector(state => state.movie);
  return (
    <>
      <Title>TV Series</Title>
      <Container>
        {tvSeriesData?.map(item => (
          <MovieList item={item} key={item.title} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(4, 0fr);
  grid-column-gap: 40px;
  grid-row-gap: 84px;

  margin-top: 35px;

  @media (min-width: 1900px) {
    grid-template-columns: repeat(5, 0fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 90px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: repeat(4, 0fr);
    grid-column-gap: 15px;
    grid-row-gap: 40px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};
  letter-spacing: -0.5px;
  line-height: 40px;
  margin-top: 34px;
`;

export default TvSeries;
