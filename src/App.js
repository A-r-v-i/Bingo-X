import React, { Component } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./layers/ImageList";
import SearchBar from "./layers/SearchBar";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (term) => {
    //const response = await unsplash.get('/photos')
    const response = await unsplash.get(`/search/photos?query=${term}`);
    console.log(response);
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    let imgLen = this.state.images.length;
    let noOfImgs = imgLen > 0 ? <p>Found {imgLen} no's of images</p> : null;

    return (
      <div className="container">
        <>
          <SearchBar onSubmit={this.onSearchSubmit} />
          {noOfImgs}
          <div className="row">
            <ImageList
              images={this.state.images}
              onClick={this.onSearchSubmit}
            />
          </div>
        </>
      </div>
    );
  }
}
