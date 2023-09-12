import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const Card = (data) => {
    const context = useContext(ShoppingCartContext);
    const addItem = () => {
        context.setCount(context.count + 1)
    };
    const showProduct = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail)
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg mb-10'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                <img className='w-full object-cover rounded-lg h-full' src={data.data.image} alt={data.data.description} />
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={addItem}>
                    <PlusIcon className='h-6 w-6 text-black' />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className='text-sm font-light mb-30'>{data.data.title}</span>
                <span className='text-lg font-medium ml-2'>${data.data.price}</span>
            </p>
        </div>
    )
}

export { Card }