import React from 'react';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, disabled, className, ...props }: ButtonType) {
  return (
    <button disabled={disabled} className={className} {...props}>
      {children}
    </button>
  );
}

