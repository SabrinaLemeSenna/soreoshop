import React, { Component } from 'react';
import Carousel1 from '../images/carousel1.png';
import Carousel2 from '../images/carousel2.png';
import Carousel3 from '../images/carousel3.png';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>                           

            )
        })

        return(
            <div className="container">
                <div class="carousel">
                    <a class="carousel-item" href="#two!">
                        <img src={Carousel1}></img>
                    </a>
                    <a class="carousel-item" href="#three!">
                        <img src={Carousel2}></img>
                    </a>
                    <a class="carousel-item" href="#four!">
                        <img src={Carousel3}></img>
                    </a>
                </div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)