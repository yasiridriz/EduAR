import React, { Component } from "react";
import storage from "../Firebase/index";
import '@zeit-ui/style';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    if (this.state.image === null) {
      alert('No file selected')
    }
    else {

      const { image } = this.state;
      const uploadTask = storage.ref(`files/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref("files")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
            });
        }
      );
    }

  };
  render() {
    return (
      <div className="center">
        <br />
        <h2>Upload your 3D model </h2>
        <br />
        <br />
        <div class="zi-progress-bar">
          <div class="zi-progress">
            <div class="zi-progress__inner" style={{ width: this.state.progress + '%' }}></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="zi-input-group prefix">
          <span class="zi-label prefix">
            <input type="file" onChange={this.handleChange} style={{ width: '50%' }} required />
          </span>
          <input className="file-path validate zi-input" placeholder="Enter URL" type="text" />
        </div>
        <br />
        <br />
        <button
          onClick={this.handleUpload}
          className="zi-btn primary"
        >
          Upload
        </button>
        <br />
        <br />

        <img
          src={this.state.url || "https://www.cherrylondon.com/wp-content/uploads/2017/10/placeholder-400x400.jpg"}
          alt="Uploaded Images"
          height="400"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
