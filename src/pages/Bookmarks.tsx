import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import LoadingSpinner from '../components/LoadingSpinner';
import MovieList from '../components/MovieList';
import { renderCurrentBookmarks } from '../features/movie/movieSlice';

const Bookmarks = () => {
  const { bookMarkedMovies, allContentData, isLoading } = useAppSelector(
    state => state.movie
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(renderCurrentBookmarks());
  }, [allContentData]);

  const bookmarkTitles = () => {
    if (bookMarkedMovies.length <= 0) {
      return <NoBookmarks>You have no bookmarks yet. Start adding some!</NoBookmarks>;
    }

    const movieCategory = bookMarkedMovies.find(item => item.category === 'Movie');

    if (movieCategory && bookMarkedMovies.length > 0) {
      return <Title>Bookmarked Movies </Title>;
    }
  };

  const tvSeriesTitle = () => {
    const tvCategory = bookMarkedMovies.find(item => item.category === 'TV Series');

    if (tvCategory && bookMarkedMovies.length > 0) {
      return <Title>Bookmarked TV Series </Title>;
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {bookmarkTitles()}
          <MovieContainer>
            {bookMarkedMovies.map(
              (item: any) =>
                item.category === 'Movie' && <MovieList item={item} key={item.title} />
            )}
          </MovieContainer>
          {tvSeriesTitle()}

          <TvSeriesContainer>
            {bookMarkedMovies.map((item: any) => {
              if (item.category === 'TV Series') {
                return <MovieList item={item} key={item.title} />;
              }
            })}
          </TvSeriesContainer>
        </>
      )}
    </>
  );
};

const MovieContainer = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(0, 0fr);
  grid-template-rows: repeat(5, 0fr);
  grid-column-gap: 40px;
  grid-row-gap: 84px;

  @media (max-width: 2400px) {
    grid-template-columns: repeat(5, 0fr);
    grid-template-rows: repeat(5, 0fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
  }
`;

const TvSeriesContainer = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(6, 0fr);
  grid-column-gap: 40px;
  grid-row-gap: 84px;

  @media (max-width: 1900px) {
    grid-template-columns: repeat(5, 0fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: repeat(6, 0fr);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
  }
`;

const NoBookmarks = styled.p`
  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 34px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Heading.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Heading.Medium.fontWeight};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Heading.Small.fontSize};
    font-weight: ${({ theme }) => theme.Heading.Small.fontWeight};

    width: 80%;
    margin: 25px auto;

    /* overflow: hidden; */
  }
`;

const Title = styled.h1`
  margin-top: 34px;

  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};
  color: ${({ theme }) => theme.colors.white};
`;

export default Bookmarks;
