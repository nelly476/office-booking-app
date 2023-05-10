import "./App.css";
import BookingFormPage from "./components/BookingFormPage";
import backgroundImg from "../src/assets/bg-img.jpg";

function App() {
  return (
    <div className="main-page">
      <img src={backgroundImg} alt="background-image-mountains" />
      <BookingFormPage />
    </div>
  );
}

export default App;
