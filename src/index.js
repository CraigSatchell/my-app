import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <div><h4>This is cool.</h4></div>
}

ReactDom.render(<div><Greeting /></div>, document.getElementById('root'));
