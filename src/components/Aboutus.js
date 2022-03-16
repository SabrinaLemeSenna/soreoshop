import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Aboutus extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    
    render(){
        return(
            <div className="container">
                Aboutus
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

export default connect(mapStateToProps,mapDispatchToProps)(Aboutus)