import React from "react";

import User from "./user/User";

const App = () => {
  return (
    <>
      <User initialValue={0} step={2} default={0} />
    </>
  );
};

export default App;
