　
import { Component } from "react";

const FnComp = ({name}) => {
  return (
    <h3>{name} Function Component</h3>
  )
}

class Welcome extends Component {
  render() {
    return (
       <h3>{this.props.name} Welcome Component</h3>
    );
  }
}

class Example extends Component {
  render() {
    return (
      <>
        <Welcome name={'Hello'}/>
        <FnComp name={'Hello'} />
      </>
    );
  }
  
}

export default Example;
