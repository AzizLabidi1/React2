import logo from './logo.svg';
import clouds from "./imageInSrc.jpg"
import './style.css';
import ta9chira from "./ta9chira.mp4"

function App() {
  return (
    <div>
<div style={{border: 'solid 2px black ', maxWidth: '100vw '}}>
<h1 className="title red">Mohamed Aziz Labidi</h1>
<br></br>
<img style= {{ width: 800 , margin: '10%' }} src={clouds} alt="cloudsimage" />
<br></br>
<img style={{ width: 800 , margin: '10%'}} src="/imageInPublic.jpg" />
</div>
<video width={500} height={350} controls>
<source src={ta9chira} type="video/mp4" />
</video>
</div>
  );
}

export default App;
