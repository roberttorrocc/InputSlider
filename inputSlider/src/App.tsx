import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={() => navigate("/normalSlider")}>NormalSlider</button>
      <button onClick={() => navigate("/inputSlider")}>InputSlider</button>
    </div>
  );
}

export default App;
