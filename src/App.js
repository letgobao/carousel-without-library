/** @format */

import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Slide from "./components/slide/Slide";
function App() {
  const data = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
  ];
  return (
    <div className='App'>
      <Carousel data={data} />
    </div>
  );
}

export default App;
