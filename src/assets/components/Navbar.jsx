import { useState } from "react"


function User({product_length}) {
    return(<>

   
    
      <div className="   flex justify-between items-center  bg-blue-150">
        <div className="container_1 flex relative p-2 ">
            <div className="text-center">
                <span className="ml-2 border p-2  pt-4 mr-3 mt-4  rounded-2xl text-center bg-blue-500 text-white">
                      <i className="fa-solid fa-cart-shopping text-2xl mt-3 "></i>

                </span>
                <span className="absolute left-12 top-  border-amber-50 rounded-xl  bg-red-500 w-6 text-amber-50">{product_length}</span>
              
            </div>
            <div className="ml-2">
                <h1 className="text-2xl font-bold">Your Card</h1>
          <p>Good things are on the way!<i className="fa-solid fa-star text-amber-200"></i></p>
            </div>
            
          
        </div>
        <div className="container_2 hidden md:block">
           <span  className=" border rounded-4xl p-2 font-semibold  bg-blue-200 text-blue-600"> <i class="fa-solid fa-bag-shopping mr-2"></i>{product_length} items</span>

        </div>
       
      </div>
    
   
    
    
    </>)

  
}



export default User