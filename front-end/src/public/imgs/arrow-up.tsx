import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -0.5 17 17'
  >
    <path
      d='M7.96 2.392a1.49 1.49 0 0 1 2.104 0l6.442 6.444c.582.581.839 2.103-1 2.103H2.518c-1.902 0-1.582-1.521-1.001-2.103z'
    ></path>
  </svg>
);

export default React.memo(SvgIcon);
