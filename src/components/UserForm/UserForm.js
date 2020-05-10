import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropInfo from '../UserForm/DropInfo'


class UserInfo extends Component {
    state = {
        user: {
            userId: this.props.user.id,
            farm_name: this.props.info.farm_name,
            farm_location: this.props.info.farm_location,
            brief_description: this.props.info.brief_description,
            full_description: this.props.info.full_description,
            share_information: this.props.info.share_information,
            images: this.props.info.images,
            drop_name: this.props.info.drop_name,
            drop_location: this.props.info.drop_location
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
        this.props.dispatch({ type: 'PUT_INFO', payload: this.state.user });
        //TODO- push user to individual farm view
        // this.props.history.push('/api/farm');
    };

    // Deletes drop info or image information from database


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.info.farm_name !== this.state.user.farm_name ) {
          this.setState({
              user: {
                userId: this.props.user.id,
                farm_name: this.props.info.farm_name || '',
                farm_location: this.props.info.farm_location || '',
                brief_description: this.props.info.brief_description || '',
                full_description: this.props.info.full_description || '',
                share_information: this.props.info.share_information || '',
                images: this.props.info.images || '',
                drop_name: this.props.info.drop_name || '',
                drop_location: this.props.info.drop_location || ''
                    }
            });
        }
    };

    render() {
        console.log('this.state.user is:', this.state.user );
        console.log('this.props:', this.props)
            return (
            <div>
                {/* User for testing user state */}
                {/* {JSON.stringify(this.props.info)} */}

                
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group" >
                        <label>Farm name:</label>
                        <input type="text" class="form-control" defaultValue={this.state.user.farm_name} onChange={(event) => this.handleChangeFor(event, 'farm_name')} />
                        <label>Farm location:</label>
                        <input type="text" class="form-control" defaultValue={this.state.user.farm_location} onChange={(event) => this.handleChangeFor(event, 'farm_location')} />
                        <label>Brief description:</label>
                        <textarea type="text" class="form-control" defaultValue={this.state.user.brief_description} onChange={(event) => this.handleChangeFor(event, 'brief_description')} /><br />
                        <label>Full description:</label>
                        <textarea type="text" class="form-control" defaultValue={this.state.user.full_description} onChange={(event) => this.handleChangeFor(event, 'full_description')} /><br />
                        <label>Share information: </label>
                        <textarea type="text" class="form-control" defaultValue={this.state.user.share_information} onChange={(event) => this.handleChangeFor(event, 'share_information')} /><br />
                        </div>
                            <DropInfo/>
                            
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
                                    <td>{this.state.user.images}</td>
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