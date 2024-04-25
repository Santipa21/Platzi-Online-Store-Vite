import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
       MyOrder
       <div className='flex flex-col w-80'>
            {
                context.order && context.order?.slice(-1)[0]?.products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    />
                ))
            }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder
  