import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class UserInfo extends Component {
    state = {
        user: {
            userId: this.props.user.id,
            farm_name: '',
            farm_location: '',
            brief_description: '',
            full_description: '',
            share_information: '',
            images: '',
            drop_name: '',
            drop_location: ''
        }
    };

    componentDidMount() {
        this.getInfo();
    }


    getInfo = () => {
        axios.get(`/api/info`)
            .then((response) => {
                this.setState({ user: response.data[0] });
                console.log(`componentDidMount returns: ${response.data}`);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            user: {
                ...this.state.user,
                [propertyName]: event.target.value,
            }
        })
    };

    //Dispatches info to the database
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dispatching info payload:', this.state.user);

        // Send inputs to infoSaga
        this.props.dispatch({ type: 'POST_INFO', payload: this.state.user });
        //TODO- push user to individual farm view
        // this.props.history.push('/api/farm');
    };

    // Deletes drop info or image information from database
    handleDelete = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'DELETE_INFO', payload: this.state.user })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>Farm name:</label>
                        <input value={this.state.user.farm_name} onChange={(event) => this.handleChangeFor(event, 'farm_name')} />
                        <label>Farm location:</label>
                        <input value={this.state.user.farm_location} onChange={(event) => this.handleChangeFor(event, 'farm_location')} />
                        <label>Brief description:</label>
                        <textarea value={this.state.user.brief_description} onChange={(event) => this.handleChangeFor(event, 'brief_description')} /><br />
                        <label>Full description:</label>
                        <textarea value={this.state.user.full_description} onChange={(event) => this.handleChangeFor(event, 'full_description')} /><br />
                        <label>Share information: </label>
                        <textarea value={this.state.user.share_information} onChange={(event) => this.handleChangeFor(event, 'share_information')} /><br />
                        <label>Drop-off locations: </label>
                        <input placeholder="drop off name" value={this.state.user.drop_name} onChange={(event) => this.handleChangeFor(event, 'drop_name')} /><br />
                        <input placeholder="drop off address" value={this.state.user.drop_location} onChange={(event) => this.handleChangeFor(event, 'drop_location')} /><br />
                        <table className="info-tbl">
                            <thead>
                                <tr>
                                    <th>Drop-off name:</th>
                                    <th>Drop-off location</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <td>{this.state.user.dropName}</td>
                                    <td>{this.state.user.dropLocation}</td>
                                    <td onClick={this.handleDelete}>Delete</td>
                                </tr>
                            </thead>
                        </table>
                        <label>Images:</label>
                        <input type="file" value={this.state.user.images} onChange={(event) => this.handleChangeFor(event, 'images')} /><br />
                        <table className="info-tbl">
                            <thead>
                                <tr>
                                    <th>Images:</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <td>{this.state.user.images}</td>
                                    <td onClick={this.handleDelete}>Delete</td>
                                </tr>
                            </thead>
                        </table>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user
});

export default connect(mapReduxStateToProps)(UserInfo);