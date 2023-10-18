export const Logo = ({
  width = 30,
  height = 30,
}: {
  width?: number;
  height?: number;
}) => (
  <svg 
    width={width}
    height={height} 
    viewBox="0 0 475 476" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H118C184.274 0 238 53.7258 238 120V238H0V0Z" fill="#041231"/>
    <path d="M237 238H475V476H357C290.726 476 237 422.274 237 356V238Z" fill="#041231"/>
    <path d="M0 358C0 291.726 53.7258 238 120 238H238V476H0V358Z" fill="#041231"/>
    <path d="M237 0H475V119C475 184.722 421.722 238 356 238V238C290.278 238 237 184.722 237 119V0Z" fill="#041231"/>
  </svg>
);
