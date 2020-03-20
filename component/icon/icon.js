import React from "react";
const Icon = props => {
  const { style = {}, className ='' } = props;
  return <i className={className} style={{...style, width: '30px', height: '30px', display: 'inline-block'}}></i>;
};
export { Icon };
