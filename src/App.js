import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp/TodoApp";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <About />
      <TodoApp /> */}
      <Header/>
      <Router>
        <Route path="/" exact component={TodoApp} /> 
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
    }
export default App;
