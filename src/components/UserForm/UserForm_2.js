//COMPONENT NOT USED
//COMPONENT NOT USED

//COMPONENT NOT USED

//COMPONENT NOT USED

//COMPONENT NOT USED



import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


class UserForm extends Component {

    render(){
    return (
        <form onSubmit={this.props.handleSubmit}>
            <div>
                <label>Farm Name</label>
                <div>
                    <Field name="farmName" 
                    value
                    component="input" type="text" placeholder="Farm Name" />
                </div>
            </div>
            <div>
                <label>Farm Location</label>
                <div>
                    <Field name="farmLocation" component="input" type="text" placeholder="Address" />
                </div>
            </div>
            <div>
                <label>Brief Description</label>
                <div>
                    <Field name="brief" component="input" type="text" placeholder="Farm description" />
                </div>
            </div>
            <div>
                <label>Full History/Information</label>
                <div>
                    <Field name="full" component="input" type="text" placeholder="Full description" />
                </div>
            </div>
            {/* <div>
                <label>CSA Type</label>
                <Field
                    name="type"
                    component={Multiselect}
                    defaultValue={[]}
                    onBlur={() => props.onBlur()}
                    data={['Vegetable', 'Fruit', 'Meat']} />
            </div> */}
            <div class="form-group">
                <label for="FormControlFile1">Upload Photos</label>
                <input type="file" class="form-control-file" id="FormControlFile1" />
            </div>
            <div>
                <button type="submit" >
                    Submit
        </button>
                <button type="button" >
                    Clear Values
        </button>
            </div>
        </form>
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user,
    storedInfo: reduxState.form.simple
});

export default reduxForm({
    form: 'simple'  // a unique identifier for this form
})(connect(mapReduxStateToProps)(UserForm))