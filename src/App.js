import Globalstyle from "./globalstyles";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//importing components
import Navbar from "./pages/navbar";
import Hero from "./pages/hero";
import Skills from "./pages/skills";
import Details from "./pages/details";
import About from "./pages/about";
import Contact from "./pages/contact";
function App() {
  const [isDesktop, setDesktop] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 750) {
      setDesktop(false);
    } else {
      setDesktop(true);
    }
  }, []);
  const location = useLocation();
  //animating trail on mouse move
  window.addEventListener("mousemove", function (e) {
    var x = [...document.getElementsByClassName("pointer")];
    //applying animation to each dot
    x.forEach((element) => {
      element.style.left = `${e.pageX}px`;
      element.style.top = `${e.pageY}px`;
    });
  });
  return (
    <div>
      <Globalstyle />

      <Navbar />
      <Switch location={location}>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/skills/:name" exact>
          <Details />
        </Route>
      </Switch>
      {isDesktop ? (
        <div className="trail">
          <div className="pointer pointer1"></div>
          <div className="pointer pointer2"></div>
          <div className="pointer pointer3"></div>
          <div className="pointer pointer4"></div>
          <div className="pointer pointer5"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
