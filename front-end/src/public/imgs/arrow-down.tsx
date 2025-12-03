import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='si-glyph si-glyph-triangle-down'
    viewBox='0 -0.5 17 17'
  >
    <path
      d='M10.106 12.69a1.49 1.49 0 0 1-2.104 0L1.561 6.246c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1 2.103z'
    ></path>
  </svg>
);

export default React.memo(SvgIcon);
