import { createContext, useEffect, useState } from 'react';


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [productToShow, setProductToShow] = useState({});
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [items, setItems] = useState([]);
    const [searchByTitle, setSearchByTitle] = useState('');

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cart,
                setCart,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}