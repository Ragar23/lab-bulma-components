import React from "react";

class FormField extends React.Component {
  render() {
    let { label, type, placeholder } = this.props;
    return (
      <div>
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export { FormField };
