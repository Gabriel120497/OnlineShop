import { useContext } from "react";
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if (index === 'last') {
        index = context.order?.length - 1
    }

    return (
        <Layout>
            <div className="flex justify-center items-center relative w-80 mb-6">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col'>
                {
                    context.order?.[index]?.products.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export { MyOrder }