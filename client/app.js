import React from "react";
import Schedule from "./schedule"

// Start by writing here! Frontend first!
const dummy = [{time: "7am", title: "breakfast"}, {time: "12pm", title: "lunch"}, {time: "6pm", title: "dinner"}]

const App = () => {
  return <Schedule events={dummy} />
};

export default App;
