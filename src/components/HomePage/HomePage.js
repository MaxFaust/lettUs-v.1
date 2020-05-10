import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Bootstrap
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class HomePage extends Component {
    state = {
        user: {

        }
    }

    //GET all farms on page load
    componentDidMount() {
        this.props.dispatch({ type: `FETCH_FARMS` });
        this.setState(this.props.info);
    };

    // Takes user to individual farmPage
    handleClick = id => async () => {
        console.log('HIT', id)

        await this.props.dispatch({ type: 'FETCH_A_FARM', payload: id });
        await this.props.history.push(`/api/farm/`);
    };

    render() {
        return (
            <>
                {/* {JSON.stringify(this.props.user.id)} */}
                {/* Loops over reduxState to render all farms info from the database onto cards */}
                <CardColumns>
                    {this.props.farms.map((item) => {
                        console.log('HIT', item.user_id)
                        return (
                            <Card key={item.id} onClick={this.handleClick(item.user_id)}>
                                <Card.Title>{item.farm_name}</Card.Title>
                                <Card.Subtitle>{item.farm_location}</Card.Subtitle>
                                <Card.Img variant="top" src='http://bajaranchmarkets.com/images/slides/produce-1.jpg' alt="farm image" />
                                <Card.Body>
                                    <Card.Text>{item.brief_description}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                    )
                    }
                </CardColumns>
            </>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    farms: reduxState.farms,
    user: reduxState.user
});

export default withRouter(connect(mapReduxStateToProps)(HomePage));