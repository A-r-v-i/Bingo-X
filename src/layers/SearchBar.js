import React, { Component } from 'react';
import { Button,Form,Input } from 'reactstrap';
import "./css/searchBar.css";

export default class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {
            term: ''
        }
    }
    onSubmitForm = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="_searchBar">
                <Form className="row" onSubmit={this.onSubmitForm}>
                    <Input className="col-sm-8" type="text" onChange={e => {this.setState({ term: e.target.value })}} />
                    <Button className="_searchBtn col-sm-3" color="primary" type="submit">Search</Button>
                </Form>
            </div>
        )
    }
}
