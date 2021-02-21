import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
      <header>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </header>
  
      <main>
        <h1 className="title">
          Welcome to __________!
        </h1>
      </main>
  
      <footer>
        <p style={{textAlign: "center"}}>Shoot me a message with any feature requests!<br />
          © Kyle Rohlfing - 2020</p>
      </footer>
    </div>
    );
  }
}

export default App;
