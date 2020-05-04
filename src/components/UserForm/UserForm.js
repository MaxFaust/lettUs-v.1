


import React, { Component } from 'react';
import { connect } from 'react-redux';



class UserInfo extends Component {
    // componentDidMount(
    //     this.setState
    // )
    state = {
        user: {
            userId: this.props.user.id,
            farmName: '',
            farmLocation: '',
            briefDescription: '',
            fullDescription: '',
            shareInformation: '',
            dropName: '',
            dropLocation: '',
            images: ''
        }
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            user: {
                ...this.state.user,
                [propertyName]: event.target.value,
            }
        })
    };


    handleSubmit = (event) => {
        if (this.state.user === '') {
            alert('please enter the required information');
        } else {
            event.preventDefault();
            console.log('Dispatching info payload:', this.state.user);

            // Send inputs to infoSaga
            this.props.dispatch({ type: 'POST_INFO', payload: this.state.user });
            //TODO- push user to individual farm view
            // this.props.history.push('/api/farm');
        }
    };

    render() {
        return (
            //TODO- default value this.props.inputName
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Farm name:</label>
                    <input value={this.state.user.farmName} onChange={(event) => this.handleChangeFor(event, 'farmName')} />
                    <label>Farm location:</label>
                    <input value={this.state.user.farmLocation} onChange={(event) => this.handleChangeFor(event, 'farmLocation')} />
                    <label>Brief description:</label>
                    <textarea value={this.state.user.briefDescription} onChange={(event) => this.handleChangeFor(event, 'briefDescription')} /><br />
                    <label>Full description:</label>
                    <textarea value={this.state.user.fullDescription} onChange={(event) => this.handleChangeFor(event, 'fullDescription')} /><br />
                    <label>Share information: </label>
                    <textarea value={this.state.user.shareInformation} onChange={(event) => this.handleChangeFor(event, 'shareInformation')} /><br />
                    <label>Drop-off locations: </label>
                    <input placeholder="drop off name" value={this.state.user.dropinfo} onChange={(event) => this.handleChangeFor(event, 'dropName')} /><br />
                    <input placeholder="drop off address" value={this.state.user.dropinfo} onChange={(event) => this.handleChangeFor(event, 'dropLocation')} /><br />
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
                    <input type="file" value={this.state.user.images} onChange={(event) => this.handleChangeFor(event, 'images')}/><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user
});

export default connect(mapReduxStateToProps)(UserInfo);