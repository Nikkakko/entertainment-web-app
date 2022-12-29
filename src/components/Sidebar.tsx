import styled from 'styled-components';
import AvatarLogo from '../../public/assets/image-avatar.png';
import { NavLink, Link } from 'react-router-dom';
import IconHome from '../images/IconHome';
import IconMovies from '../images/IconMovies';
import IconTvSeries from '../images/IconTvSeries';
import IconBookmark from '../images/IconBookmark';
import LogoIcon from '../images/Logo';

const Sidebar = () => {
  return (
    <Container>
      <MovieLogo>
        <Link to='/'>
          <LogoIcon />
        </Link>
      </MovieLogo>
      <Menu>
        <StyledNavLink to='/'>
          <IconHome />
        </StyledNavLink>
        <StyledNavLink to='/movies'>
          <IconMovies />
        </StyledNavLink>
        <StyledNavLink to='/tv-series'>
          <IconTvSeries />
        </StyledNavLink>
        <StyledNavLink to='/bookmark-shows'>
          <IconBookmark />
        </StyledNavLink>
      </Menu>
      <ProfilePicture>
        <Avatar src={AvatarLogo} />
      </ProfilePicture>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96px;
  height: 960px;
  border-radius: 20px;
  margin: 32px 0 32px 32px;
  background: ${({ theme }) => theme.colors.semiDarkBlue};

  @media screen and (max-width: 425px) {
    width: 425px !important;
    border-radius: 0;
    height: 56px;
    flex-direction: row;
    margin: 0 !important;
    padding: 18px 16px;
  }

  @media (max-width: 768px) {
    width: 719px;
    height: 72px;
    flex-direction: row;
    margin: 23px 24px;
    padding: 24px 16px 22px 24px;
    justify-content: space-between;
    border-radius: 10pxd;
  }

  @media (max-width: 375px) {
    width: 375px !important;
  }
`;

const MovieLogo = styled.div`
  margin-top: 32px;

  @media (max-width: 425px) {
    margin: 0;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 74px;
  gap: 40px;

  @media (max-width: 425px) {
    flex-direction: row;
    margin-top: 0;
    gap: 24px;
    margin-left: 80px !important;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    gap: 32px;
    margin-left: 217px;
  }

  @media (max-width: 375px) {
    margin-left: 60px !important;
  }
`;

const ProfilePicture = styled.div`
  padding: 0 28px 32px 28px;

  @media (max-width: 425px) {
    margin-bottom: 0;
    margin-right: 16px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;

const StyledNavLink = styled(NavLink)`
  fill: ${({ theme }) => theme.colors.greyishBlue};

  &[class*='active'] {
    fill: ${({ theme }) => theme.colors.white};
    &:hover {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:hover {
    fill: ${({ theme }) => theme.colors.red};
  }

  @media (min-width: 425px) {
  }
`;

export default Sidebar;
