import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const LIGHT_COLORS = {
  APP_MAIN_COLOR: '4267B2',
};
export const DARK_COLORS = {
  APP_MAIN_COLOR: '4267B2',
};

export const ThemeLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LIGHT_COLORS,
  },
};
export const ThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...DARK_COLORS,
  },
};
