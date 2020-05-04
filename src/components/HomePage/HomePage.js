import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: `FETCH_FARMS` });
    }

    render() {
        return (

            // Loops over reduxState to render info from the database onto cards
            <CardColumns>
                {this.props.reduxState.info.map((item) => {
                    return (
                        <Card >
                            <Card.Title>{item.farm_name}</Card.Title>
                            <Card.Subtitle><a href={item.farm_location} class="card-link">{item.farm_location}</a></Card.Subtitle>
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

export default connect(mapReduxStateToProps)(HomePage);