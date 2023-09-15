import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './styles.css'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        let filteredProducts = context.cart.filter(product => product.id != id);
        context.setCart(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toJSON().slice(0, 10),
            products: context.cart,
            totalProducts: context.cart.length,
            totalPrice: totalPrice(context.cart)
        }
        context.setCart([]);
        context.setCount(0);
        context.setOrder([...context.order, orderToAdd]);
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>
            <div className='px-4 overflow-y-scroll flex-1'>
                {
                    context.cart.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-4 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-xl'>$ {totalPrice(context.cart)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button onClick={handleCheckout} className='bg-black py-3 text-white rounded-lg w-full'>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
}

export { CheckoutSideMenu }