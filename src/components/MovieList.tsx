import styled from 'styled-components';
import playIcon from '../images/icon-play.svg';
import emptyBookMark from '../images/icon-bookmark-empty.svg';
import movieCategory from '../images/IconCategoryMovie.svg';
import { useAppDispatch } from '../app/hooks';
import {
  updateBookMarkedMovies,
  updateBookmarkedPage,
  updateMovies,
  updateRecommended,
  updateSearch,
  updateTrending,
  updateTvSeries,
} from '../features/movie/movieSlice';
import fullBookMark from '../images/icon-bookmark-full.svg';
import { ApiData } from '../types/DataType';

type Props = {
  item: ApiData;
};

type DotProps = {
  second?: boolean;
  isBookmarked?: boolean;
};

const MovieList = ({ item }: Props) => {
  const { id, isBookmarked } = item;
  const dispatch = useAppDispatch();

  const {
    thumbnail: {
      regular: { large: largeImage, small: smallImage },
    },
  } = item;

  const handleBookmark = () => {
    dispatch(updateBookMarkedMovies(id));
    dispatch(updateMovies(id));
    dispatch(updateTrending(id));
    dispatch(updateTvSeries(id));
    dispatch(updateRecommended(id));
    dispatch(updateBookmarkedPage(id));
    dispatch(updateSearch(id));
  };

  return (
    <Container>
      <PlayWrapper>
        <PlayIcon src={playIcon} alt='playicon' />
        <PlayTitle>Play</PlayTitle>
      </PlayWrapper>
      <Image src={smallImage} alt={item.title} />
      <Bookmark isBookmarked={isBookmarked} onClick={handleBookmark} />

      <InfoWrapper>
        <InfoDiv>
          <Date>{item.year}</Date>
          <Dot />
          <MovieCategory />
          <Category>{item.category}</Category>
          <Dot second />
          <Rating>{item.rating}</Rating>
        </InfoDiv>
        <Title>{item.title}</Title>
      </InfoWrapper>
    </Container>
  );
};

const PlayWrapper = styled.div`
  position: absolute;
  /* width: 117px;
  height: 48px; */

  border-radius: 28.5px;
  background-color: rgba(255, 255, 255, 0.25);

  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 9px 24px 9px 9px;
  gap: 19px;

  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  display: none;
`;

const PlayIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const PlayTitle = styled.p`
  font-size: ${({ theme }) => theme.Text.Medium.fontSize};
  font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
  line-height: 23px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  max-width: 280px;
  height: 174px;

  cursor: pointer;

  &:hover {
    /* opacity: 0.75; */

    ${PlayWrapper} {
      display: flex;
    }
  }

  @media (max-width: 375px) {
    /* width: 160px; */
  }
`;

const Image = styled.img`
  border-radius: 8px;
  object-fit: contain;

  &:hover {
    opacity: 0.35;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 140px;
    object-fit: cover;
  }

  @media (max-width: 425px) {
    width: 190px;
    height: 144px;
  }

  @media (max-width: 375px) {
    width: 164px;
    height: 110px;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.Heading.ExtraSmall.fontSize};
  font-weight: ${({ theme }) => theme.Heading.ExtraSmall.fontWeight};
  line-height: 23px;
  margin-top: 5px;

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
  }
`;
const Date = styled.p`
  opacity: 0.75;

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Small.fontWeight};
  }
`;
const Category = styled.p`
  opacity: 0.75;

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Small.fontWeight};
  }
`;
const Rating = styled.p`
  opacity: 0.75;

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Small.fontWeight};
  }
`;

const Dot = styled.div<DotProps>`
  /* position: absolute; */
  bottom: 65px;
  left: ${({ second }) => (second ? '142px' : '64px')};
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;

const Bookmark = styled.div<DotProps>`
  position: absolute;

  background: url(${({ isBookmarked }) => (isBookmarked ? fullBookMark : emptyBookMark)})
    no-repeat center;

  border-radius: 50px;
  background-color: rgba(16, 20, 30, 0.5);

  width: 32px;
  height: 32px;

  right: 24px;
  top: 16px;
`;
const MovieCategory = styled.div`
  /* position: absolute; */
  background: url(${movieCategory}) no-repeat center;
  width: 12px;
  height: 12px;
  bottom: 60px;
  left: 75px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default MovieList;
