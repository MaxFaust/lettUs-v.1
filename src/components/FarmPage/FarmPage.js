import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class FarmPage extends Component {

    render() { 
        return (  
            <>
                {JSON.stringify(this.props.reduxState)}

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
        })
            }
            </>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});
 
export default connect(mapReduxStateToProps) (FarmPage);

