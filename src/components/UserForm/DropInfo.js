import React, { Component } from 'react';
import { connect } from 'react-redux';



class DropInfo extends Component {
    state = {
        user: {
            drop_name: this.props.info.drop_name,
            drop_location: this.props.info.drop_location
        }
    };

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INFO', payload: this.props.user.id })
        console.log(`user id sending to saga: ${this.props.user.id}`);
    };

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
        this.props.dispatch({ type: 'PUT_INFO', payload: this.state.user });
        //TODO- push user to individual farm view
        // this.props.history.push('/api/farm');
    };

    handleDelete = (event) => {
        // event.preventDefault();
        // this.props.dispatch({ type: 'DELETE_INFO', payload: this.state.info })
    };

    render() {
        console.log('this.state.user is:', this.state.user );

        return (
            <div>
            <label>Drop-off locations: </label>
            <input class="form-control" placeholder="drop off name" defaultValue={this.state.user.drop_name} onChange={(event) => this.handleChangeFor(event, 'drop_name')} /><br />
            <input class="form-control" placeholder="drop off address" defaultValue={this.state.user.drop_location} onChange={(event) => this.handleChangeFor(event, 'drop_location')} /><br />
            <input type="submit" value="Submit Drop Info" onClick={this.handleSubmit}/> 
            <table class="form-group table table-striped" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Drop-off name:</th>
                        <th scope="col">Drop-off location</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <thead class="thead-dark">
                    <tr>
                        <td>{this.state.user.drop_name}</td>
                        <td>{this.state.user.drop_location}</td>
                        <td onClick={this.handleDelete()}>Delete</td>
                    </tr>
                </thead>
            </table> 
            </div>
            );
    }
};


const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user,
    info: reduxState.info
});

export default connect(mapReduxStateToProps)(DropInfo);