import React from "react";
import { MyNavbar } from "./navbar/Navbar";
import { FormField } from "./formfield/FormField";
import { MyButtons } from "./coolbutton/CoolButton";
import { SignupPage } from "./signup/Signup";

const App = () => {
  let raquel = "Raquel Garcia";
  let raquelEmail = "raquelrgarc@hotmail.com";
  let buttonOne = "Button 1";
  let buttonTwo = "Button 2";

  return (
    <div>
      <MyNavbar />
      <FormField label="Name" type="text" placeholder={raquel} />
      <FormField label="Email" type="email" placeholder={raquelEmail} />
      <MyButtons name={buttonOne} className="button is-light" />
      <br></br>
      <MyButtons name={buttonTwo} className="button is-dark" />
      <SignupPage />
    </div>
  );
};

export default App;
