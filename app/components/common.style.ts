import { css } from '@emotion/react';

export const HideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const nbcColors = {
  primary: '#E8344E',
  secondary: '#81898F',
  tertiary: '#EEF3F6',
};

export const designSystemTheme = {
  colors: {
    dark: nbcColors,
    light: nbcColors,
  },
  breakpoints: {
    desktop: 1024,
    mobile: 0,
    tablet: 768,
  },
};
