import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import  {searchImages} from '../store/actions';
import "./css/searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      term: "",
    };
  }
  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.searchImages(this.state.term);
  };
  render() {
    return (
      <div className="_searchBar">
        <Form className="row" onSubmit={this.onSubmitForm}>
          <Input
            className="col-sm-8"
            type="text"
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
          <Button className="_searchBtn col-sm-3" color="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

//start from here, should add state in reducers for search images reducers.

const mapDispatchToProps = (dispatch) => {
  return {
    searchImages: (tag) => {
      dispatch(searchImages(tag));
    },
  };
};

export default connect(null,mapDispatchToProps)(SearchBar);
