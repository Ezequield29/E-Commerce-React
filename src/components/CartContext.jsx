import { createContext,useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) =>{
        const isInCart = cart.find((prod) => prod.id === item.id);

        if(isInCart){
            const updatedCart = cart.map((prod) =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            );
            setCart(updatedCart);
        }else {
            setCart([...cart, { ...item, quantity }]);
        }
    }
    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id)
        setCart([...items])
    }
    const clearCart = () => {
        setCart([])
    }
    const getCountProducts = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }
    const getSumProducts = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
    }
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, getCountProducts, getSumProducts}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext