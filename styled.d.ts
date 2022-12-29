// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      white: string;
      red: string;
      darkBlue: string;
      greyishBlue: string;
      semiDarkBlue: string;
    };
  }
}
