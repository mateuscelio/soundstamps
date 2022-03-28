import "./App.css";
import StampsList from "./components/StampsList";

function App() {
  return (
    <div className="App">
      <div class="popup-content">
        <div class="header">
          <div class="header__icon"></div>
          <h1 class="stamp-the-time">SoundStamps</h1>
        </div>
        <StampsList />
      </div>
    </div>
  );
}

export default App;
