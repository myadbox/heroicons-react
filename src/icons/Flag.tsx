import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const Flag = React.forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      ref={ref}
      width={size}
      height={size}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
        clipRule="evenodd"
      />
    </svg>
  );
});
export default Flag;