import { XCircleIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import { Link } from 'react-router-dom'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
        date: '24.04.2024',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
}

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg top-[68px]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <XCircleIcon className="h-6 w-6 text-black cursor-pointer"></XCircleIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1 '>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
            <button
            onClick={() => handleCheckout()}
            className='w-full bg-black py-3 text-white rounded-lg'
            >Checkout</button></Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu