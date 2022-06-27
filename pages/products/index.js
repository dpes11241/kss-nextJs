import React from 'react'

const products = [
    {
        id: 1,
        company_name: 'apple'
    },
    {
        id: 2,
        company_name : 'samsung'
    },
    {
        id: 3,
        company_name : 'xyz'
    }
]

const prodcuts = () => {
  return (
    <>
        <div>This is products page.</div>
        { products.map( (product) => (
            <div key={product.id}>
                <h2> { product.company_name } </h2>
            </div>
        ) ) }
    </>
  )
}

export default prodcuts
