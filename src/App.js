import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import Components from "./pages/components/components";
import AvatarDoc from "./documents/avatardoc/avatardoc";
// import Installation from "./documents/Installation/Installation";
import AlertDoc from "./documents/alertdoc/alertdoc";
import BadgeDoc from "./documents/badgedoc/badgedoc";
import HeadingsDoc from "./documents/headingdoc/headingdoc";
import ButtonDoc from "./documents/buttondoc/buttondoc";
import TextDoc from "./documents/textdoc/textdoc";
import ImageDoc from "./documents/imagedoc/imagedoc";
import CardDoc from "./documents/carddoc/carddoc";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        {/* <Route path="/installation" element={<Installation />} /> */}
        <Route path="/components/avatar" element={<AvatarDoc />} />
        <Route path="/components/alert" element={<AlertDoc />} />
        <Route path="/components/badge" element={<BadgeDoc />} />
        <Route path="/components/card" element={<CardDoc />} />
        <Route path="/components/button" element={<ButtonDoc />} />
        <Route path="/components/headings" element={<HeadingsDoc />} />
        <Route path="/components/text" element={<TextDoc />} />
        <Route path="/components/image" element={<ImageDoc />} />
      </Routes>
    </div>
  );
}
export default App;
