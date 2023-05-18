import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer mt-2 text-center">
      <p>
        This project was coded by {""}
        <a
          href="https://www.instagram.com/zare9/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zarela G.
        </a>{" "}
        It is{" "}
        <a
          href="https://github.com/zarela23/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced on GitHub
        </a>{" "}
        and{" "}
        <a href=" " target="_blank" rel="noopener noreferrer">
          hosted on Netlify.
        </a>
      </p>
    </div>
  );
}
