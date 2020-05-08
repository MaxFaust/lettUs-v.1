import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Bootstrap
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: `FETCH_FARMS` });
    };

    handleClick = () => {
        this.props.history.push('/api/farm');
    };

    render() {
        return (
            // <>
            // {JSON.stringify(this.props.user)};
            // </>
            // Loops over reduxState to render info from the database onto cards
            <CardColumns>
                {this.props.reduxState.info.map((item) => {
                    return (
                        <Card onClick={this.handleClick}>
                            <Card.Title>{item.farm_name}</Card.Title>
                            <Card.Subtitle>{item.farm_location}</Card.Subtitle>
                            <Card.Img variant="top" src={item.images} alt="farm image" />
                            <Card.Body>

                                <Card.Text>{item.brief_description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
                )
                }
            </CardColumns>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default  withRouter(connect(mapReduxStateToProps)(HomePage));