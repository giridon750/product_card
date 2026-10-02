

function Total_details({ order }) {
    // order = {
    //     bill: 5000,
    //     tax: 50,
    //     delivery_charge: 50
    // }

    return (<>





























        <div className="container   max-w-full mt-7  rounded border-2  border-slate-200 p-4 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex-1 ">
                <div className="flex mb-4">
                    <span className=" border w-12 h-12 min-w-12 shrink-0 mr-4 rounded-4xl text-center bg-blue-500 text-white">
                        <i className="fa-solid fa-cart-shopping text-2xl mt-3 "></i>

                    </span>
                    <div>
                        <p className="text-xl font-bold">Have a Coupon Code ?</p>
                        <p className="">Apply your Coupon and get discount</p>
                    </div>
                </div>

                <input type="text" placeholder="eg.SAVED20" className="  p-1 rounded border w-full mb-4 cover" />


                <button className="w-50 border p-2 ml-4 bg-blue-500 text-white mr-8 rounded-2xl mt-2 font- semibold ">Apply now</button>
            </div>

            <div className="mt-4 md:m-0 rounded border-2 border-slate-200 p-4 bg-green-50">
                <div className="flex justify-between ">

                    <div className="container_1 ">

                        <p className="mt-1 font-semibold"><i className="fa-solid fa-receipt mr-2 text-green-300"></i> Subtotal:</p>
                        <p className="mt-1 font-semibold"><i className="fa-solid fa-truck mr-2 text-green-300"></i>delivery_charge:</p>
                        <p className="mt-1 font-semibold"><i className="fa-solid fa-percent mr-2 text-green-400"></i> Tax:</p>
                        <p className="mt-1 font-semibold"><i className="fa-solid fa-credit-card mr-2 text-green-300"></i>Total:</p>
                    </div>



                    <div className="container_1 boder ml-10  ">


                        <p className=" font-semibold
                     ">${order["bill"]}</p>
                        <p className="mt-1 font-semibold">${order["delivery_charge"]}</p>
                        <p className="mt-1 font-semibold">${order["tax"]}</p>
                        <p className="mt-1 font-semibold text-2xl ">${order["bill"]
                            + order["tax"] + order["delivery_charge"]}</p>



                    </div>

                </div>
                <div className=" container2  mt-4">
                    <button className=" border bg-green-600 text-white mr-10 rounded-xl w-full p-2  mt-2 font- semibold "><i className="fa-solid fa-lock mr-3"></i>Check_out</button>


                </div>


            </div>


</div>





        </>)
}


        export default Total_details