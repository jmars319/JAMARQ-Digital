export const logos = {
  wordmark: {
    dark: '/assets/logos/wordmark-dark.png',
    light: '/assets/logos/wordmark-light.png'
  },
  icon: {
    dark: '/assets/logos/icon-dark.png',
    light: '/assets/logos/icon-light.png',
    svg: '/assets/logos/icon.svg',
    black: '/assets/logos/icon-black.png',
    cyan: '/assets/logos/icon-cyan.png',
    grey: '/assets/logos/icon-grey.png',
    white: '/assets/logos/icon-white.png'
  }
} as const;

export type LogoType = typeof logos;
