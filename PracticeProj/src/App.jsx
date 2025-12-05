import React from "react";
import URLshortener from "./components/urlShortener.jsx";
import UserList from "./components/UserList.jsx";
import MicroserviceCalculator from "./components/MicroserviceCalculator.jsx";

function App() {
  return (
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Frontend Assessment Practice</h1>
      <URLshortener />
      <hr />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
