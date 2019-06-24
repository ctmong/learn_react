import React from "react";

function Hello({ color, name, isSpecial }) {
  console.log(color);
  console.log(name);
  console.log(isSpecial);
  return (
    <div style={{ color }}>
      {isSpecial && <span>*</span>}
      hello motherfucker {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "no name"
};

export default Hello;
