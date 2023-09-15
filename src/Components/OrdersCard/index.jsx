import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className='flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>{new Date().toJSON().slice(0, 10)}</span>
                    <span className='font-light' >{totalProducts} Articles</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    );
};

export { OrdersCard };