import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration > 0;

  const handleInputChange = (inputId, newValue) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputId]: +newValue };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
