import React from "react";
import { UserForm } from "./components/UserForm";
import { LoginTabs } from "./components/LoginTabs"

function App() {
  return (
    <div className="App">
      <UserForm />
      <LoginTabs />
    </div>
  );
}

export default App;
