import React from "react";

type TDividerProps = React.HTMLAttributes<HTMLDivElement> & {
  maxWidth?: string | number;
  height?: string;
};

function Divider({ maxWidth, style, height = "2px", ...props }: TDividerProps) {
  const combinedStyle = { maxWidth, height, ...style };

  return (
    <div {...props} className="bg-gray-600" style={combinedStyle}></div>
  );
}

export default Divider;
