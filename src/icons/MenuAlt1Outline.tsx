import * as React from "react";
interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

const MenuAlt1Outline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(MenuAlt1Outline);
export default ForwardRef;
