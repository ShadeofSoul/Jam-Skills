import { BrowserRouter } from "react-router-dom";
import Pages from "./routes/Pages";
import { connect } from "react-redux";

function App({ tests }) {
  console.log(tests);
  return (
    <BrowserRouter>
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default connect(({ tests }) => ({ tests }))(App);
