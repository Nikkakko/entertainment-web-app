import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import MovieList from '../components/MovieList';

const Search = () => {
  const { searchResults, searchValue } = useAppSelector(state => state.movie);

  const showTitle = () => {
    if (searchResults.length === 0) {
      return <InfoTitle>No results found for "{searchValue}"</InfoTitle>;
    } else {
      return (
        <InfoTitle>
          Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}{' '}
          for "{searchValue}"
        </InfoTitle>
      );
    }
  };

  return (
    <>
      {showTitle()}
      <ResultsWrapper>
        {searchResults.map(item => {
          return <MovieList item={item} key={item.title} />;
        })}
      </ResultsWrapper>
    </>
  );
};

const ResultsWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(4, 0fr);
  grid-column-gap: 40px;
  grid-row-gap: 84px;

  margin-top: 35px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(4, 0fr);
    grid-column-gap: 20px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: repeat(4, 0fr);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
  }
`;

const InfoTitle = styled.h1`
  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};
  line-height: 40px;
  margin-top: 35px;
`;

export default Search;
