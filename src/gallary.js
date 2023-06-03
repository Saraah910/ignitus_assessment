import React, { useState } from 'react';
import pic1 from "./assets/chef.jpg"
import pic2 from "./assets/man-laptop.jpg"
import pic3 from "./assets/pencil.jpg"
import pic4 from "./assets/main-page.png"
import pic5 from "./assets/logo-image.jpg"
import pic6 from "./assets/logo-image.jpg"
export default function Gallary(){

    const [pictures, setPictures] = useState([
          { id: 1, name: 'Picture 1', price: 10, address: pic1},
          { id: 2, name: 'Picture 2', price: 15, address: pic2},
          { id: 3, name: 'Picture 3', price: 20, address: pic3},
          { id: 4, name: 'Picture 4', price: 25, address: pic4},
          { id: 5, name: 'Picture 5', price: 30, address: pic5},
          { id: 6, name: 'Picture 6', price: 20, address: pic6},
        ]);
      
    const [cart, setCart] = useState([]);
      
    const addToCart = (picture) => {
        setCart([...cart, picture]);
    };
    
    const removeFromCart = (picture) => {
        const updatedCart = cart.filter((item) => item.id !== picture.id);
        setCart(updatedCart);
    };
    
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Pictures for Sale</h2>
            <h4>Buy pictures of your choice</h4>
            <ul style={{display:"flex", flexDirection:"row",alignItems:"center", gap:"3%",overflowX:"scroll",marginLeft:"15%",marginRight:"10%"}}>
                {pictures.map((picture) => (
                    <div key={picture.id} >
                            <img alt={picture.name} src={picture.address} width={200} height={200}></img>
                            <br></br>
                            <br></br>
                            <button onClick={() => addToCart(picture)}>Buy</button>
                            <br></br>
                    </div>
                
                ))}
            </ul>

            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                {cart.map((picture) => (
                    <li key={picture.id}>
                    {picture.name} - ${picture.price}
                    <img alt={picture.name} src={picture.address} width={80} height={80}></img>
                    <button onClick={() => removeFromCart(picture)}>Remove</button>
                    </li>
                ))}
                </ul>
            )}

            {cart.length > 0 && (
                <div>
                <h3>Total Price: ${getTotalPrice()}</h3>
                <button onClick={() => setCart([])}>Pay</button>
                </div>
            )}
        </div>
        )
}