import Home from "./pages/home";
import './App.css'

function App() {
  return (
    <div 
      className="bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="max-w-[1568px] mx-auto">
        <Home />
      </div>
    </div>
  ) 
}

export default App
