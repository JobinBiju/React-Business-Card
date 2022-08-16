import dp from './assets/dp.png';
import instagram from './assets/Instagram.png';
import fb from './assets/Facebook.png';
import git from './assets/GitHub.png';
import twit from './assets/Twitter.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={dp} className="dp" alt="dp" />
        <h2>Laura Smith</h2>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
        <div className="content">
          <h4 className="c-title">About</h4>
          <p className="c-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h4 className="c-title">Interests</h4>
          <p className="c-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <div className="footer">
          <img className="twit" src={twit} alt="icon" />
          <img className="fb" src={fb} alt="icon" />
          <img className="insta" src={instagram} alt="icon" />
          <img className="git" src={git} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
