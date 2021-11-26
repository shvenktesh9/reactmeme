import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CreateMeme from "./CreateMeme";

function App() {
  const [templates, setTeplates] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTeplates(response.data.memes))
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <button>
        CreateMeme
        <Router>
          <Switch>
            <Route path="/gd">
              <CreateMeme />
            </Route>
          </Switch>
        </Router>
      </button>
      {templates.map((template) => {
        return (
          <img
            style={{ width: 200 }}
            key={template.id}
            src={template.url}
            alt={templates.name}
          />
        );
      })}
    </div>
  );
}

render(<App />, document.getElementById("root"));
