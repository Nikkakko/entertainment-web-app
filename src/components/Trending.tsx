import styled from 'styled-components';
import TrendingItem from './TrendingItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { useAppSelector } from '../app/hooks';
import { ApiData } from '../types/DataType';
import { useEffect, useState } from 'react';

const Trending = () => {
  const { trendingMovies } = useAppSelector(state => state.movie);
  const [slide, setSlide] = useState(3);

  const handleSlide = () => {
    if (window.innerWidth <= 375) {
      setSlide(1.9);
    } else if (window.innerWidth <= 425) {
      setSlide(2.05);
    } else if (window.innerWidth <= 768) {
      setSlide(1.7);
    } else if (window.innerWidth <= 1024) {
      setSlide(2.2);
    } else if (window.innerWidth <= 1440) {
      setSlide(3);
    } else if (window.innerWidth <= 1920) {
      setSlide(4);
    } else if (window.innerWidth <= 2560) {
      setSlide(5);
    } else {
      setSlide(3);
    }
  };

  useEffect(() => {
    handleSlide();
    window.addEventListener('resize', handleSlide);

    return () => {
      window.removeEventListener('resize', handleSlide);
    };
  }, [slide]);

  return (
    <Container>
      <Title>Trending</Title>

      <SwiperContainer
        spaceBetween={100}
        slidesPerView={slide}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        style={{ width: '100%', height: '100%' }}
      >
        {trendingMovies?.map((item: ApiData) => (
          <SwiperSlideContainer key={item.title}>
            <ItemWrapper>
              <TrendingItem item={item} key={item.title} />
            </ItemWrapper>
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.Heading.Large.fontSize};
  font-weight: ${({ theme }) => theme.Heading.Large.fontWeight};

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.Heading.Medium.fontSize};
    font-weight: ${({ theme }) => theme.Heading.Medium.fontWeight};
  }
`;

const ItemWrapper = styled.div`
  margin-top: 25px;
  display: flex;
`;

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;

  /* margin-left: 50px; */
`;

const SwiperSlideContainer = styled(SwiperSlide)``;

export default Trending;
