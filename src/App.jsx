import { useState } from 'react'
import Product_card from './assets/components/product_card'
import Total_details from './assets/components/footer'
import User from './assets/components/Navbar'
import './App.css'

function App() {

    const [order, setOrder] = useState({
        "bill": 0,
        "tax": 0,
        "delivery_charge": 0
    })
     let[product_length,setproduct_length]=useState(3)
    return (
        <>
        <User product_length={product_length}/>
            <Product_card 
    setOrder={setOrder}
    setproduct_length={setproduct_length}
/>

            <Total_details order={order} />
            
        </>
    )
}

export default App