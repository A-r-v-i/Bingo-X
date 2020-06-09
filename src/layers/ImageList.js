import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import UserDetails from "./UserDetails";
import { fetchImages, searchImages, fetchBigImage } from "../store/actions";
import OpenImage from "./OpenImage";
import "./css/imageList.css";
import unsplash from "../api/unsplash";

class ImageList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      isOpen: false,
      image: '',
    };
  }

  componentDidMount() {
    this.props.fetchImages();
    let i = unsplash.get("/photos/flha0KwRrRc/download");
    console.log(i);
  }

  openImage = (image) => {
    //console.log("clicked", image);
    this.setState({
      isOpen: true,
      image: image
    });
  };

  closeImage=() => {
    this.setState({isOpen:false, image: ''});
  }

  renderImages = (images) => {
    return images.map((image) => {
      return (
        <div id="image" key={image.id}>
          <img
            onClick={() => this.openImage(image)}
            src={image.urls.regular}
            alt={image.alt_description}
          />
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
    const {results}  = this.props.images;
    const blur = this.state.isOpen ? true:false;
    return (
      <div className="images-container">
      <div className={blur ? "blur": ""}>
        {results ? (
          this.renderImages(results)
        ) : (
          <Spinner className="spinner" type="grow" color="secondary" />
        )}
        </div>
        {this.state.isOpen && <OpenImage image={this.state.image} isOpen={true} handleClick={this.closeImage} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    images: state.images,
    // image: state.image
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
    // fetchBigImage: (tag,id) => {
    //   dispatch(fetchBigImage(tag,id));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
