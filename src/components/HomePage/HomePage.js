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
            <CardColumns>
                {this.props.reduxState.map((item) => {
                    return (
                        <Card>
                            <Card.Img variant="top" src={item.images} alt="farm image" />
                            <Card.Body>
                                <Card.Title>{item.farmName}</Card.Title>
                                <Card.Text>
                                    {item.brief}
                        </Card.Text>
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