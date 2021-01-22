import React, { Component } from 'react';    
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    renderDate(date){
        return (
            new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))
        );
    }

    renderComments(comments) {
        if (comments != null)
            return(      
                comments.map(comment => (
                    <ul key={comment.id} className="list-unstyled">
                      <li className="mb-2">{comment.comment}</li>
                      <li>
                        -- {comment.author}{", "}{this.renderDate(comment.date)}
                      </li>
                    </ul>
                )));
        else
            return(
                <div></div>
            );
    }
    renderDish(dish){
        return(
            <Card key={dish.id}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() {
        if (this.props.dish != null)
            return (
                <div className="container">
                <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        
                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>


                    </div>
                    </div>
        );
        else
            return(
                <div></div>
            );

    }
}

export default DishDetail;