import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import UserDetails from "./UserDetails";
import { fetchImages, searchImages } from "../store/actions";
import "./css/imageList.css";
import unsplash from "../api/unsplash";

class ImageList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    // this.state = {
    //   term: "",
    //   images: [],
    // };
  }

  componentDidMount() {
    this.props.fetchImages();
    let i = unsplash.get("/photos/flha0KwRrRc/download");
    console.log(i);
  }

  renderImages = (images) => {
    return images.map((image) => {
      return (
        <div id="image" key={image.id}>
          <img src={image.urls.regular} alt={image.alt_description} />
          <div className="tags">
            <div>
              {image.tags.map((tag) => {
                return (
                  <span
                    className="tag"
                    key={tag.title}
                    onClick={() => this.props.searchImages(tag.title)}
                  >
                    {tag.title}
                  </span>
                );
              })}
            </div>
            <div className="user">
              <UserDetails userdetails={image.user} />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { results } = this.props.images;
    console.log(results);

    return (
      <div className="images-container">
        {results ? (
          this.renderImages(results)
        ) : (
          <Spinner className="spinner" type="grow" color="secondary" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => {
      dispatch(fetchImages());
    },
    searchImages: (tag) => {
      dispatch(searchImages(tag));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
