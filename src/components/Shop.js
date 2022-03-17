import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

 class Shop extends Component {
     handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Card key={item.id}>
                        <Card.Body className="card-image">
                            <Card.Img src={item.img} alt={item.title}/>
                            <Card.Title className="card-title">{item.title}</Card.Title>
                            <Button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></Button>
                        </Card.Body>

                        <Card.Body className="card-content">
                            <Card.Text>{item.desc}</Card.Text>
                            <Card.Text><b>Price: {item.price}$</b></Card.Text>
                        </Card.Body>
                 </Card>

            )
        })

        return(
            <Container>
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </Container>
        )
    }
 }
 
 const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)