// import links
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import One from "./components/one";
import Two from "./components/two";
import css from "./assets/css/App.css";

// routers
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />}>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
