import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class FarmPage extends Component {
    state= '';

    render() { 
        return (  
            <>


            {this.props.info.map((item) => {
                    return (
                        <Card key={item.id} >

                            <Card.Title>{item.farm_name}</Card.Title>
                            <Card.Subtitle>{item.farm_location}</Card.Subtitle>
                            <Card.Img variant="top" src={item.images} alt="farm image" />
                            <Card.Img variant="top" src='http://bajaranchmarkets.com/images/slides/produce-1.jpg' alt="farm image" />
                            <Card.Body>
                                <Card.Text>{item.full_description}</Card.Text>
                                <Card.Text>{item.drop_name}</Card.Text>
                                <Card.Text>{item.drop_location}</Card.Text>
                                <Card.Text>{item.drop_name}</Card.Text>
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
    info: reduxState.info
});
 
export default connect(mapReduxStateToProps) (FarmPage);

