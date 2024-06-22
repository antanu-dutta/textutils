import About from "./Components/About";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showSetAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const handleColorBackground = (e) => {
    document.body.style.backgroundColor = e.target.style.backgroundColor;
    document.body.style.color = "white"
    showSetAlert(`Background Color Changed to ${e.target.style.backgroundColor}`, "success");
  }

  const handleOnChange = (e) => {
    if (e.target.checked) {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showSetAlert("Dark mode has been enabled", "success")
      setBtnText("Enable Light Mode")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showSetAlert("Light mode has been enabled", "success")
      setBtnText("Enable Dark Mode")
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="Text Utils" mode={mode} handleOnChange={handleOnChange} btnText={btnText} handleColorBackground={handleColorBackground} />
      {alert && <Alert alert={alert} />}
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showSetAlert={showSetAlert} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;