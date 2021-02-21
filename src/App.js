import './App.css';
import { Component } from 'react';
import wall1 from './walls/wall-1.jpg';
import wall2 from './walls/wall-2.jpg';
import wall3 from './walls/wall-3.jpg';

class App extends Component {
  state = {
    selectedFile: false,
    isResultReady: false,
    selectedWallIndex: 0
  }

  fileSelectedHandler = event => {
    var reader = new FileReader(),
    selectedImage = document.querySelector("[data-image-selector='selected-image']");

    if (event.target.files && event.target.files[0]) {
      reader.onload = (e) => {
        selectedImage.src = e.target.result;
        this.setState({
          selectedFile: true
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  fileUploadHandler = () => {
    var wallPreview = document.querySelector("[data-image-selector='" + this.state.selectedWallIndex + "']"),
    selectedImage = document.querySelector("[data-image-selector='selected-image']"),
    canvas = document.querySelector("[data-image-selector='canvas']"),
    mergedResult = document.querySelector("[data-image-selector='merged-result']"),
    ctx = canvas.getContext('2d'),
    imageObj1 = new Image(),
    imageObj2 = new Image();

    this.setState({
      isResultReady: true
    });

    imageObj1.src = wallPreview.src;
    imageObj1.onload = () => {
      canvas.width = imageObj1.width;
      canvas.height = imageObj1.height;
      ctx.globalAlpha = 1;
      ctx.drawImage(imageObj1, 0, 0);
      imageObj2.src = selectedImage.src;
      imageObj2.onload = () => {
        this.createCombinedImage(ctx, imageObj1, imageObj2);

        var img = canvas.toDataURL('image/jpeg');
        mergedResult.src = img;
      }
    };
  }

  createCombinedImage = (ctx, img1, img2) => {
    switch (this.state.selectedWallIndex) {
      case "1":
        ctx.drawImage(img2, 1230, 442, 954, 1348);
        break;
      case "2":
        if (img2.width > img2.height) {
          ctx.drawImage(img2, (img1.width/2)-(1500/2), 550, 1500, (img2.height/img2.width)*1500);
        } else {
          ctx.drawImage(img2, (img1.width/2)-(850/2), 350, 850, (img2.height/img2.width)*850);
        }
        break;
      case "3":
        ctx.drawImage(img2, 1789, 499, 1143, 759);
        break;
    }
  }

  setSelectedWall = (e) => {
    this.setState({
      selectedWallIndex: e.target.dataset.imageSelector
    });
  }

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
  
        <p className="description">
          Get started by uploading a photo below, selecting a room, and then clicking combine
        </p>
  
        <div className="grid">
          <input className="uploadButton" type="file" onChange={this.fileSelectedHandler} style={{flexBasis: "100%"}} />
          <img data-image-selector="selected-image" className={this.state.selectedFile ? "" : "hidden"} style={{maxHeight: "30rem"}} src="/baldy.jpg" />
          
          <div className="wall-selector">
            <img data-image-selector="1" src={wall1} style={{height: "100%"}} onClick={this.setSelectedWall} className={this.state.selectedWallIndex == 1 ? "image selected" : "image"} />
            <img data-image-selector="2" src={wall2} style={{height: "100%"}} onClick={this.setSelectedWall} className={this.state.selectedWallIndex == 2 ? "image selected" : "image"} />
            <img data-image-selector="3" src={wall3} style={{height: "100%"}} onClick={this.setSelectedWall} className={this.state.selectedWallIndex == 3 ? "image selected" : "image"} />
          </div>
        </div>
        
        <button className="card combineButton" onClick={this.fileUploadHandler} disabled={this.state.selectedFile == false || this.state.selectedWallIndex == 0}>Combine</button>
        <br/>
        <br/>
        <br />
        <img data-image-selector="merged-result" className={this.state.isResultReady ? "" : "hidden"} style={{maxHeight: "500px"}} />
        <canvas data-image-selector="canvas" className="hidden"></canvas>
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
