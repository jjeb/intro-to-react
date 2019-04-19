import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("Someone clicked the title");
  }

  render() {
    //   return React.createElement("div", {}, [
    //     React.createElement(
    //       "h1",
    //       { onClick: this.handleTitleClick },
    //       "Adopt Me!"
    //     ),
    //     React.createElement(Pet, {
    //       name: "luna",
    //       animal: "dog",
    //       breed: "Havanese"
    //     }),
    //     React.createElement(Pet, {
    //       name: "Sun",
    //       animal: "Cat",
    //       breed: "mixed"
    //     }),
    //     React.createElement(Pet, {
    //       name: "Sea",
    //       animal: "Cat",
    //       breed: "Mixed"
    //     })
    //   ]);
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Sun" animal="Cat" breed="mixed" />
        <Pet name="Sea" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
