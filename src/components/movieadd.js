import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movieadd extends Component {
    state = {
        title: '', rating: '', year: '', image: ''
    }

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    handelAddMovie = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
            title: "",
            year: "",
            image: "",
            rating: ""
        });
    };

    render() {
        return (
            <div className="modal-body">
                <div className="movie-card">
                    <button className=" button-right" value="ADD" >
                        <div>
                            <button type="button" className="btn " data-toggle="modal" data-target="#exampleModal">
                                <img src="https://icon-library.net//images/plus-icon-transparent/plus-icon-transparent-14.jpg" width="75" />
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">add movie</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body-1">
                                            <input className="form-control mr-sm-2" value={this.state.title} type="text" name="title" onChange={this.handleChange} placeholder="title" />
                                            <input className="form-control mr-sm-2" value={this.state.image} type="url" name="image" onChange={this.handleChange} placeholder="image" />
                                            <input className="form-control mr-sm-2" maxLength="4" value={this.state.year} type="number" name="year" onChange={this.handleChange} placeholder="Year" />
                                            <input className="form-control mr-sm-2" maxLength="1" value={this.state.rating} type="number" name="rating" onChange={this.handleChange} placeholder="Rating" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handelAddMovie}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
export default Movieadd
