import { useState } from "react";
import Index from "./Components/index";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>

  );
}

export default App;