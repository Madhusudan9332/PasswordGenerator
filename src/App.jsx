import { useState } from "react";
import Header from "./components/Header";
import Password from "./components/Password";

function App() {
  return (
    <div className="flex bg-gray-800 justify-center py-10 h-screen">
      <div
        className="my-20 p-1 bg-gray-200 rounded-lg shadow-lg"
        style={{ maxWidth: "1000px" }}
      >
        <Header />
        <Password />
      </div>
    </div>
  );
}

export default App;
