import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../store/actions";
import "./css/imageList.css";

class ImageList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      term: "",
      images: [],
    };
  }

  componentDidMount() {
    this.props.fetchImages();
  }


  renderImages = (images) => {
    return (
    images.map((image) => {
      console.log(image.urls.small)
      return (
        <div id="image" key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      )
    })
    )
  };

  render() {
    const { results } = this.props.images;
    console.log(results);

    return <div className="images-container">{(results)?(this.renderImages(results)):<>loading</>}</div>;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
