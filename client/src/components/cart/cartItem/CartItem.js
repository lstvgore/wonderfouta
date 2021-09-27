import React from 'react';

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
    console.log(item)
    return (
        <div>
            <img style={{ maxWidth: '200px' }} src={item?.variant.assets[0].url}></img> {/* item image optional */}
            <div>
                <h1>{item.name}</h1>
                <h2>{item.line_total?.formatted_with_symbol}</h2> {/* item price */}
            </div>
            <div>
                <button type="button" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <p>{item.quantity}</p>
                <button type="button" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)} >+</button>
            </div>
            <button type="button" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
    )
}

export default CartItem;