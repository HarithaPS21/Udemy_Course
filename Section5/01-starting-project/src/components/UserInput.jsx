import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (inputId, newValue) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputId]: newValue };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInputChange(event.target.id, event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInputChange(event.target.id, event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInputChange(event.target.id, event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange(event.target.id, event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
