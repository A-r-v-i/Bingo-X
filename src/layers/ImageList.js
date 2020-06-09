import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner, Card, CardBody, CardImg, CardFooter } from "reactstrap";
import UserDetails from "./UserDetails";
import { fetchImages, searchImages } from "../store/actions";
import OpenImage from "./OpenImage";
import "./css/imageList.css";
import unsplash from "../api/unsplash";

class ImageList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      images: null,
      isOpen: false,
      image: "",
    };
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  openImage = (image) => {
    //console.log("clicked", image);
    const img = unsplash.get("/photos");
    console.log(img);
    this.setState({
      isOpen: true,
      image: image,
    });
  };

  closeImage = () => {
    this.setState({ isOpen: false, image: "" });
  };

  renderImages = (images) => {
    return images.map((image) => {
      return (
          <Card key={image.id} id="image">
            <CardImg
              top
              width="100%"
              src={image.urls.thumb}
              alt={image.alt_description}
            />
          </Card>
      );
    });
  };
  render() {
    const getData = this.props;
    const { images } = getData.images;
    images.length ? console.log("yes") : console.log("no");
    //console.log(images)
    const blur = this.state.isOpen ? true : false;
    const show = images.length ? images : "";

    console.log(show);

    return (
      <div className="images-container">
        <div className={blur ? "blur" : ""}>
          {show ? (
            this.renderImages(show)
          ) : (
            <Spinner className="spinner" type="grow" color="secondary" />
          )}
        </div>
        {this.state.isOpen && (
          <OpenImage
            image={this.state.image}
            isOpen={true}
            handleClick={this.closeImage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    images: state,
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
