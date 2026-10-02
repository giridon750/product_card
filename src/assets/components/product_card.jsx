import coffe_maker from "../product_card_image/1.png"
import LED_Table from "../product_card_image/LED Table Lamp.png"
import perfume from "../product_card_image/Perfume.png"
import sunglass from "../product_card_image/Sunglasses.png"
import { useState } from "react"


function Product_card({ setOrder, setproduct_length }) {

    let [product_details, setproduct_deails] = useState([{
        id: 101,
        name: "Coffe_Maker",
        image: coffe_maker
        ,
        price: 500,
        rating: 4.5,
        size: "medium",
        quantity: 10,
        category: "home product",
        delivery_charge: 50,
        reviews: 400



    }, {
        id: 102,

        name: "LED Table Lamb",
        image: LED_Table,
        price: 800,
        rating: 4.3,
        size: "small",
        quantity: 15,
        category: "lighting",
        delivery_charge: 70,
        reviews: 300



    }, {
        id: 103,
        name: "perfume",
        image: perfume,
        price: 600,
        rating: 4.5,
        size: "100ml",
        quantity: 20,
        category: "Beauty",
        delivery_charge: 40,
        reviews: 1000



    },])

    function quantity_value() {

    }
    // product_dealtis1={product:12}

    function Product_quantity(product_dealis1) {
        // quantity=12
        const [quanity, setquantity] = useState(product_dealis1["product"]["quantity"])
        function increament() {
            // setquantity modify the value(12+1 =13)
            setquantity(quanity + 1)

        }
        // quanity decreament 
        function decreament() {
            // setquantity modify the value(12-1 =13)
            setquantity(quanity - 1)


        }

        return (<>


























            <span className="border  border-blue-300 p-1 rounded-xl   bg-blue-500">
                <button className="w-8 mt-2  bg-blue-500 text-white  font-semibold rounded" onClick={increament} ><i class="fa-solid fa-plus"></i></button>
                <button className="w-8 border  border-white  m-0 bg-white text-black font-semibold rounded" >{quanity}</button>
                <button className="w-8   bg-blue-500 text-white  font- semibold rounded" onClick={decreament

                }><i class="fa-solid fa-minus"></i></button> <br />
            </span>
            <button className="w-30 border mt-5 p-1  bg-blue-500 text-white  font- semibold rounded-2xl" onClick={function order_now() {
                setOrder({
                    "bill": product_dealis1["product"]["price"] * quanity,
                    "tax": product_dealis1["product"]["price"] * quanity / 100, "delivery_charge": product_dealis1["product"]["delivery_charge"]
                })
            }}><i className="fa-solid fa-cart-shopping mr-3 "></i>order_now</button>



        </>)
    }

    return (<>
        {/* design */}


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-4">


            {product_details.map(function (product_card) {
                return <>
                    <div className="container_1 rounded border-2 border-slate-200 p-4 bg-slate-50">

                        <img src={product_card["image"]} alt="" className="w-full h-50 object-cover rounded-xl" />
                        <div className=" flex justify-between">
                            <div className="card_deatls1 ">
                                <h1 className="text-base font-semibold ">{product_card["name"]}</h1>
                                <p className="font-serif ">{product_card["id"]}</p>
                                <p className="mb- ">{product_card["category"]}</p>
                                <p className="mb-2 font-serif"><i className="fa-solid mr-3 fa-star text-yellow-400"></i>4.4 | ( {product_card["reviews"]} reviws)</p>
                                {/* function call product_quantity ({"producut":"19"}) */}
                                <Product_quantity product={product_card
                                } />




                            </div>
                            <div className="card_dealis1   ">
                                <p className="mt-2 font-serif font-semibold text-xl">${product_card["price"]}</p>

                                <button
                                    className="mt-15 border p-1 w-10 bg-red-200 border-red-200 rounded-2xl ml-2 text-red-500"
                                    onClick={function () {

                                        let new_products = product_details.filter(function (product) {
                                            return product_card !== product
                                        })

                                        setproduct_deails(new_products)
                                        setproduct_length(new_products.length)

                                    }}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>




                            </div>
                        </div>

                    </div >
                </>
            })}


        </div >




    </>)
}
export default Product_card