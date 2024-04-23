import { XCircleIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg top-[68px]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon className="h-6 w-6 text-black"></XCircleIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail