import {ComponentPropsWithoutRef} from 'react';

type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({children, className, ...restProps}: ButtonProps) {
  const classes = [
    className,
    'px-3 border border-black rounded'
  ].join(' ');

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}
