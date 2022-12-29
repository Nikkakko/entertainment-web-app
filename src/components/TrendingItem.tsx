import styled from 'styled-components';
import emptyBookMark from '../images/icon-bookmark-empty.svg';
import fullBookMark from '../images/icon-bookmark-full.svg';
import movieCategory from '../images/IconCategoryMovie.svg';
import playIcon from '../images/icon-play.svg';
import { useAppDispatch } from '../app/hooks';
import { updateBookMarkedMovies, updateTrending } from '../features/movie/movieSlice';
import { ApiData } from '../types/DataType';

interface TrendingItemProps {
  item: ApiData;
}

type DotProps = {
  second?: boolean;
  isBookmarked?: boolean;
};

const TrendingItem = ({ item }: TrendingItemProps) => {
  const dispatch = useAppDispatch();
  const { id, isBookmarked } = item;

  const {
    thumbnail: {
      trending: { large: largeImage, small: smallImage },
    },
  } = item;

  const handleBookmark = () => {
    dispatch(updateBookMarkedMovies(id));
    dispatch(updateTrending(id));
  };

  return (
    <Container>
      <PlayWrapper>
        <PlayIcon src={playIcon} alt='playicon' />
        <PlayTitle>Play</PlayTitle>
      </PlayWrapper>

      <Image src={smallImage} alt={item.title} />

      <Title>{item.title}</Title>
      <Date>{item.year}</Date>
      <MovieCategory />
      <Dot />
      <Dot second />
      <Category>{item.category}</Category>
      <Rating>{item.rating}</Rating>
      <Bookmark isBookmarked={isBookmarked} onClick={handleBookmark} />
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

  @media (min-width: 425px) {
    padding: 4px 12px 4px 4px;
    border-radius: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover {
    ${PlayWrapper} {
      display: flex;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Small.fontWeight};
  }
`;

const PlayIcon = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 425px) {
    width: 20px;
    height: 20px;
  }
`;

const PlayTitle = styled.p`
  font-size: ${({ theme }) => theme.Text.Medium.fontSize};
  font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
  line-height: 23px;

  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Small.fontWeight};
  }
`;

const Image = styled.img`
  border-radius: 8px;
  z-index: -22;

  @media (max-width: 768px) {
    width: 470px;
    height: 230px;
  }

  @media (max-width: 425px) {
    width: 240px;
    height: 140px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 24px;
  bottom: 24px;

  font-size: ${({ theme }) => theme.Heading.Small.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Small.fontWeight};

  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};

    bottom: 12px;
  }
`;

const Date = styled.p`
  position: absolute;
  left: 24px;
  bottom: 60px;

  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};

    bottom: 30px;
  }
`;

const Category = styled.p`
  position: absolute;
  left: 93px;
  bottom: 60px;
  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
    bottom: 30px;
  }
`;

const Rating = styled.p`
  position: absolute;
  left: 153px;
  bottom: 60px;

  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.Text.Small.fontSize};
    font-weight: ${({ theme }) => theme.Text.Medium.fontWeight};
    bottom: 30px;
  }
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

  z-index: 999;
`;

const MovieCategory = styled.div`
  position: absolute;
  background: url(${movieCategory}) no-repeat center;
  width: 12px;
  height: 12px;
  bottom: 60px;
  left: 75px;

  @media (min-width: 425px) {
    bottom: 30px;
  }
`;

const Dot = styled.div<DotProps>`
  position: absolute;
  bottom: 65px;
  left: ${({ second }) => (second ? '142px' : '64px')};
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;

export default TrendingItem;
