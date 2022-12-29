import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  Heading: {
    Large: {
      fontSize: '32px',
      fontWeight: '300',
    },
    Medium: {
      fontSize: '24px',
      fontWeight: '300',
    },
    Small: {
      fontSize: '24px',
      fontWeight: '500',
    },
    ExtraSmall: {
      fontSize: '18px',
      fontWeight: '500',
    },
  },

  Text: {
    Medium: {
      fontSize: '15px',
      fontWeight: '300',
    },
    Small: {
      fontSize: '13px',
      fontWeight: '300',
    },
  },

  colors: {
    white: '#FFFFFF',
    red: '#FC4747',
    darkBlue: '#10141E',
    greyishBlue: '#5A698F',
    semiDarkBlue: '#161D2F',
  },
};

export { myTheme };
