import React, { Component } from 'react'
import { connect } from 'react-redux';




class HomePage extends Component {

    state = {
        newElement: '',
      }
    componentDidMount() {
        this.props.dispatch({type: `FETCH_FARMS`});
      }

    render() {
        return (
            <>
                {JSON.stringify(this.props.reduxState)}
            </>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HomePage);