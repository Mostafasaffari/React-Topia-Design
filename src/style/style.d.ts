// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export type ThemeName = "main" | "special";
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      blackToWhite: string[];
      main: string[];
    };
  }
}
