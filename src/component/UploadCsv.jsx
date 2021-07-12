import React, { Component } from "react";
import ApiService from "../service/ApiService";
import Button from "@material-ui/core/Button";

class UploadCsv extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    responseData: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    ApiService.uploadFile(formData)
    .then((res) => {
      this.setState({ responseData: res.data });
    }).catch((error) => {
        console.log(error)
    });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h3>Upload File(Only CSV file allowed)</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button className={Button} onClick={this.onFileUpload}>
            Upload >>
          </button>
        </div>
         <div className="text-center" style={style}>{this.state.responseData && this.state.responseData.message}</div>
        {this.fileData()}
      </div>
    );
  }
}
const style = {
    color: "red",
    margin: "10px",
};
export default UploadCsv;
