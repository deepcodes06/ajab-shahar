import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <main className="flex-grow">
        <Home />
      </main>
    </div>
  );
}

export default App;
