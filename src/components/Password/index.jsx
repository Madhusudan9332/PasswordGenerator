import { useState } from "react";
import "./style.css";
import { allCriterias } from "./script";
import Generator from "./Generator";
import Criterias from "./Criterias";

const Password = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [criterias, setCriterias] = useState({
    all: false,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });

  const handleCriterias = (e) => {
    if (e.target.id == "all") {
      const val = e.target.checked;
      setCriterias({
        all: val,
        uppercase: val,
        lowercase: val,
        numbers: val,
        symbols: val
      });
      return;
    }
    setCriterias({
      ...criterias,
      [e.target.id]: e.target.checked,
    });
  };
  const passwordCopied = () => {
    if(password.length<8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
    setPassword("");
  };
  const passGenerator = () => {
    var characters = "";
    if (criterias.uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (criterias.lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (criterias.symbols) characters += "!@#$%^&*()_+";
    if (criterias.numbers) characters += "0123456789";
    if(characters == "") {
      alert("Please select at least one criteria");
      return;
    }
    var genPassword = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      genPassword += characters[randomIndex];
    }
    setPassword(genPassword)
  };
  console.log(criterias);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Generator
          password={password}
          setPassword={setPassword}
          length={length}
          setLength={setLength}
          passwordCopied={passwordCopied}
          criterias={criterias}
          setCriterias={setCriterias}
          passGenerator={passGenerator}
        />
        <Criterias
          allCriterias={allCriterias}
          criterias={criterias}
          handleCriterias={handleCriterias}
        />
      </div>
    </>
  );
};
export default Password;
