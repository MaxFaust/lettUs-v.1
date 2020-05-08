import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        this.props.dispatch({ type: 'GET_INFO', payload: this.props.user.id})
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
        this.props.dispatch({ type: 'POST_INFO', payload: this.state.user });
        //TODO- push user to individual farm view
        // this.props.history.push('/api/farm');
    };

    // Deletes drop info or image information from database
    handleDelete = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'DELETE_INFO', payload: this.state.info })
    };

    render() {
            
            return (
            <div>
                {/* User for testing user state */}
                {/* {JSON.stringify(this.props.info)} */}

                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>Farm name:</label>
                        <input class="form-control" value={this.props.info.farm_name} onChange={(event) => this.handleChangeFor(event, 'farm_name')} />
                        <label>Farm location:</label>
                        <input class="form-control" value={this.props.info.farm_location} onChange={(event) => this.handleChangeFor(event, 'farm_location')} />
                        <label>Brief description:</label>
                        <textarea class="form-control" value={this.props.info.brief_description} onChange={(event) => this.handleChangeFor(event, 'brief_description')} /><br />
                        <label>Full description:</label>
                        <textarea class="form-control" value={this.props.info.full_description} onChange={(event) => this.handleChangeFor(event, 'full_description')} /><br />
                        <label>Share information: </label>
                        <textarea class="form-control" value={this.props.info.share_information} onChange={(event) => this.handleChangeFor(event, 'share_information')} /><br />
                        <label>Drop-off locations: </label>
                        <input class="form-control" placeholder="drop off name" value={this.state.user.drop_name} onChange={(event) => this.handleChangeFor(event, 'drop_name')} /><br />
                        <input class="form-control" placeholder="drop off address" value={this.state.user.drop_location} onChange={(event) => this.handleChangeFor(event, 'drop_location')} /><br />
                        </div>
                
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
                                     <td>{this.props.info.drop_name}</td>
                                     <td>{this.props.info.drop_location}</td>
                                     <td onClick={this.handleDelete}>Delete</td>
                                 </tr>
                             </thead>
                         </table>
                        <label>Images:</label>
                        <input type="file" onChange={(event) => this.handleChangeFor(event, 'images')} /><br />
                        <table class="info-tbl table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Images:</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <thead >
                                <tr>
                                    <td>{this.props.info.images}</td>
                                    <td onClick={this.handleDelete}>Delete</td>
                                </tr>
                            </thead>
                        </table>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }
};



const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user,
    info: reduxState.info
});

export default connect(mapReduxStateToProps)(UserInfo);