// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export type ThemeName = "main" | "special";
  export interface DefaultTheme {
    mainBorderRadius: string;
    mainBorderWidth: string;
    colors: {
      black: string;
      white: string;
      mainFont: string;
      mainBackground: string;
      mainBorder: string;
    };
  }
}
