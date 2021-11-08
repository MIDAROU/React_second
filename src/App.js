import indexImg from "../src/indexsrc.jpeg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={indexImg} />
          <br />
          <img src="/indexpublic.jpeg" />
      </div>
      <video controls width={320} height={240}>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
