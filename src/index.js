import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import MouseParticles from "react-mouse-particles";
ReactDOM.render(
  <ParallaxProvider>
    <div>
      <MouseParticles
        g={0.3}
        num={9}
        radius={8}
        life={0.8}
        v={0.8}
        color="black"
        alpha={0.26}
        level={6}
      />
      <App />
    </div>
  </ParallaxProvider>,
  document.getElementById("root")
);
