import AllDeposit from '@/Components/DashboardComponents/AllDeposit';
import React from 'react';

const Page = () => {
    return (
        <div className='p-5'>
            {/* <h1 className='text-center mt-5'>All Deposit</h1> */}
            <div className='flex justify-between'>
            <div className='flex gap-3 mb-5'>
               <p className='bg-blue-600 rounded-md w-auto px-2 text-white text-sm p-1'>All (1)</p>
               <p className='bg-blue-600 rounded-md w-auto px-2 text-white text-sm p-1'>Succes (1)</p>
               <p className='bg-blue-600 rounded-md w-auto px-2 text-white text-sm p-1'>Pending (0)</p>
               <p className='bg-pink-500 rounded-md w-auto px-2 text-white text-sm p-1'>Delete</p>
            </div>

            <div className='flex gap-2'>
                <input type="text"  placeholder='Search here' className='h-10'/>
                <button className='bg-blue-500 px-4 rounded-md h-10'>Search</button>
            </div>
            </div>
            <AllDeposit></AllDeposit>
        </div>
    );
}

export default Page;
