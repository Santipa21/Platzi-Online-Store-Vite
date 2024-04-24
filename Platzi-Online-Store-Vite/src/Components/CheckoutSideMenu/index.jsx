import { XCircleIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
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
            <div className='px-6 overflow-y-scroll'>
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
            <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu