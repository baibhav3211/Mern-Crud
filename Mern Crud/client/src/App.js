import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import AddJob from './components/AddJob';
import AllJobs from "./components/AllJobs";
import EditJob from "./components/EditJob";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={CodeForInterview} /> */}
        <Route exact path="/all" component={AllJobs} />
        <Route exact path="/add" component={AddJob} />
        <Route exact path="/edit/:id" component={EditJob} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
