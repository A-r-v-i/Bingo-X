import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBigImage } from "../store/actions";
import "./css/imageList.css";

class OpenImage extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      id:''
    };
  }

  componentDidMount() {
    const {image} = this.props;
    this.setState({
      isOpen: this.props.isOpen,
      id: image.id
    });
    // console.log(this.props);
    // this.props.fetchBigImage(this.state.id);
  }

  handleChange(){
    this.props.handleClick();
  }

  render() {
    console.log(this.props);
    const { image } = this.props;
    return (
      <div className="openImage">
        <img
          src={image.urls.full}
          alt="sfg"
          onClick={() => {this.handleChange()}
          }/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBigImage: (id) => {
      dispatch(fetchBigImage(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(OpenImage);
