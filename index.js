import React from "react";
import ReactDom from 'react-dom';

function Text() {
  return <h1>Just some text</h1>;
}


ReactDom.render(<Text/>, document.getElementById('root'));
