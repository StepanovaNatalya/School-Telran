import React from 'react';
import './Cart.css';
import {connect} from 'react-redux'
import { removeItemFromCart, setOrder } from '../../../store/ActionCreator';

const Cart = ({cart, deleteFromCart, order, clear, totalPrice}) => {
    
    return (
        cart.length === 0 ? <div className = 'cart__title'>
                 <h5>Cart is empty</h5>
        </div>:
        <div className = 'cart'>
            <div className='cart__title'>Your order: </div>
            <div className='cart__list'>
                 {
                     cart.map(item =>{
                         const {price, title, url, id, count} = item
                         return(
                             <div key = {id} className='cart__item'>
                                  <img src ={url} className='cart__item-img' alt= {title}/>
                                  <div className='cart__item-title'>{title}</div>
                                  <div className='cart__item-price'>{count}</div>
                                  <div className='cart__item-price'>{price * count}</div>
                                  <div className='cart__close' onClick = {()=>deleteFromCart(id)}>&times;</div>
                             </div>
                         )
                     })
                 }
            </div>
            

            <button type="button" className="order" data-bs-toggle="modal" data-bs-target="order"
            onClick = {()=>order(generateOrder(cart))}
            >
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {cart.map((item)=>
            <div key = {item.id}>
                <p>{item.title}</p>
                <p>Quantity: {item.count}</p>
                <p>{item.price * item.count}</p>
            </div>
        )}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>

        </div>
    );
};

const mapStateToProps = ({cart, totalPrice})=>{
    return{
        cart,
        totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        deleteFromCart: (id)=>dispatch(removeItemFromCart(id)),
        order: (order)=>dispatch(setOrder(order)),
        clear: ()=> dispatch()
    }
}

const generateOrder = (cart)=>{
    const order = cart.map(item=>{
        return{
            title: item,
            count: item.count,
            price: item.price
        }
    })
    return order
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);