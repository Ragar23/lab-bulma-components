import React from "react";
import { MyNavbar } from "../navbar/Navbar";
import { FormField } from "../formfield/FormField";
import { MyButtons } from "../coolbutton/CoolButton";

class SignupPage extends React.Component {
  render() {
    let raquel = "Raquel Garcia";
    let raquelEmail = "raquelrgarc@hotmail.com";
    return (
      <div>
        <MyNavbar />
        <FormField label="Name" type="text" placeholder={raquel} />
        <FormField label="Email" type="email" placeholder={raquelEmail} />
        <FormField label="Password" type="password" placeholder="password" />
        <MyButtons name="Submit" className="button is-dark" />
      </div>
    );
  }
}

export { SignupPage };
