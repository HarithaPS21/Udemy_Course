function UserInput({ userInput, onInputChange }) {
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
            }
            required
            min={1}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
