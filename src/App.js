import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      return;
    case "payLoan":
      return;
    case "closeAccount":
      return;
    default:
      throw new Error("Unknown action type!");
  }
}
function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>Reducement Banking Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={false}
        >
          Deposit £150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw £50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Request a loan of £5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!isActive}>
          Close account
        </button>
      </p>
    </div>
  );
}

export default App;
