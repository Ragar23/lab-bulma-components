import React from "react";

class MyButtons extends React.Component {
  render() {
    let { name, className } = this.props;

    return (
      <div>
        <button className={`button ${className}`}>{name}</button>
      </div>
    );
  }
}

export { MyButtons };
