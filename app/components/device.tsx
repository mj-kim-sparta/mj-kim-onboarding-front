const size = {
    mobile: 320,
    tablet: 768,
    lnbAndFloating: 834,
    desktop: 1024,
  };
  
  export const device = {
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    lnbAndFloating: `(min-width: ${size.lnbAndFloating}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    lessThanDesktop: `(max-width: ${size.desktop - 1}px)`,
  };
  
  export const forMobile = `@media ${device.mobile}`;
  export const forDesktop = `@media ${device.desktop}`;
  export const forTablet = `@media ${device.tablet}`;
  export const forGnbAndFloating = `@media ${device.lnbAndFloating}`;
  