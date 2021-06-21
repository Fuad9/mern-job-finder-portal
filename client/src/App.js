import "./styles/App.scss";
import Routes from "./components/Routes";
import JobsProvider from "./provider/JobsProvider";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <JobsProvider>
          <Routes />
        </JobsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
