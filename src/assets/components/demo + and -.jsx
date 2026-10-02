
    let product_dealis = [{
        "id": 102,
        "name": "sunglass",
        "quantity": 12,
        "price": 300,
        "category": "summar",
        "delivery_charge":40
    }, {
        "id": 103,
        " name": "perfume",
        "quantity": 40,

        "price": 600,
        "rating": 4.5,
        " size": "100ml",

        "category": "Beauty",
        "deliver_charge":50



    }]
// product_dealtis1={product:12}

// product_dealis1 = {
//     product: {
//         id: 102,
//         name: "sunglass",
//         quantity: 12,
//         price: 300,
//         category: "summar"
//     }
// }

    function Product_quantity(product_dealis1){
          const[quanity,setquantity]=useState(product_dealis1["product"]["quantity"])
           function increament() {
        setquantity(quanity+1)

    }
    // quanity decreament 
    function decreament() {
        setquantity(quanity-1)


    }


    function Total_products(){
        // product_dealis1["product"][300]*2 300*2=600
        // bill=600
        // tax=9
        // deliver_charge=50
        //600+9+5
        // 
        let bill=product_dealis1["product"]["price"]*quanity
       let tax= product_dealis1["product"]["price"]*quanity/100
       let delivery_charge=product_dealis1["product"]["delivery_charge"]
       console.log(bill)
        console.log(tax)
         console.log(delivery_charge)
         console.log(bill+tax+delivery_charge)
    }

   return(<>
  
    <button className="mt-4 m-4 border w-20 bg-black text-white" onClick={increament}>Increament</button>
                <button className="mt-4 m-4 border w-20 bg-black text-white">{quanity}</button>
                <button className="mt-4 m-4 border w-20 bg-black text-white"onClick={decreament}>Decrement</button> <br /> 
                <button className="mt-4 m-4 border w-20 bg-black text-white"onClick={Total_products} >Order_now</button>

    
  </>)}
      
    // quantity increament and decreament





    return (<>
        {product_dealis.map(function (product_dealis1) {
            return (<> 
            {/* product_deatils1["quantity"]=>20  product_quantity(20)*/}
             <Product_quantity product={product_dealis1} />
        
               
            </>)

        })}
    </>)