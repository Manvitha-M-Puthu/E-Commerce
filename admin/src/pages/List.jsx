import React, { useEffect, useState } from 'react'
import { backendURL, currency } from '../App';
import { toast } from 'react-toastify';
import axios from "axios";

const List = ({token}) => {

  const [list,setList] = useState([]);

  const fetchList = async() =>{
    try{
      const response = await axios.get(backendURL+"/api/product/list");
      if(response.data.success){
        setList(response.data.products);
        console.log(response.data);
      }else{
        toast.error(response.data.msg);
      }

    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async(id) =>{
    try{
      const response = await axios.post(backendURL+"/api/product/remove",{id},{headers:{token}});

      if(response.data.success){
        toast.success(response.data.msg);
        await fetchList();
      }else{
        toast.error(response.data.msg);
      }
    }catch(error){

    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/*List Table*/}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/*Product List*/}
        {
            list.map((item,index)=>(
              <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 bg-gray-100 text-sm'>
                <img src={item.image[0]} className='w-12' alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency}{item.price}</p>
                <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default List