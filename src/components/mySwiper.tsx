import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/scrollbar';
import TrendingItem from './TrendingItem';

interface Props {
  children: React.ReactNode[] | any;
}

const MySwiper = ({ children }: Props) => {
  console.log(children);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <TrendingItem item={children.props.item} />
      </SwiperSlide>
    </Swiper>
  );
};

const SwiperSlideContainer = styled(SwiperSlide)`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* gap: 50px; */
  /* width: 800px; */
`;

const SwiperContainer = styled(Swiper)`
  /* width: 100%;
  height: 100%; */
  /* display: flex; */
  /* flex-direction: row !important; */
`;

export default MySwiper;
