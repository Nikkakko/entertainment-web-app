import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSearchValue, setSearchResults } from '../features/movie/movieSlice';
import SearchIcon from '../images/Search';

const Search = () => {
  const { searchValue } = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // console.log(Movies);
  // console.log(searchResults);

  const location = useLocation();
  const { pathname } = location;

  const Placeholder = () => {
    if (pathname === '/tv-series') {
      return 'Search for TV series';
    } else if (pathname === '/movies') {
      return 'Search for Movies';
    } else if (pathname === '/bookmark-shows') {
      return 'Search for Bookmarked shows';
    } else {
      return 'Search for Movies or TV series';
    }
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (searchValue === '') {
      return;
    } else {
      dispatch(setSearchResults(pathname));
      navigate('/search');
    }
  };

  useEffect(() => {
    if (pathname !== '/search') {
      dispatch(setSearchValue(''));
    }
  }, [pathname]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchWrapper onClick={handleSubmit}>
          <SearchIcon />
        </SearchWrapper>
        {
          <Input
            value={searchValue}
            onChange={e => dispatch(setSearchValue(e.target.value))}
            placeholder={Placeholder()}
          />
        }
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: start;

  @media (max-width: 768px) {
  }
`;

const Form = styled.form`
  display: flex;
  width: 395px;
  align-items: center;
`;

// const SearchIcon = styled.div``;

const Input = styled.input`
  margin-left: 24px;
  border: none;
  width: 100%;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.Heading.Medium.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Medium.fontWeight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};

    opacity: 0.5;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};

    &::placeholder {
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Text.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
  }

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.Text.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
  }
`;

const SearchWrapper = styled.div``;
export default Search;
