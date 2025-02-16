import React from 'react'

const Pdetails = ({ params }: { params:{ productId: string }}) => {
    return (
        <div>
            Product Details {params.productId}  {/* it provides is dynamically product id [productID] folder dynamically accept the id we call it*/}
        </div>
    )
}

export default Pdetails
