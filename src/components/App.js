import video from "../data/video.js";
import Header from "./Header";
import Details from "./Details";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video}/> 
      <Details video={video} />
    </div>
  );
}

export default App;
