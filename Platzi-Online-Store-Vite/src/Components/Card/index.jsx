import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusCircleIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct= (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log(context.cartProducts)
    }
    return(
        <div
        onClick={() => showProduct(data.data)}
        className="bg-white cursor-pointer w-56  rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-contain rounded-lg " src={data.data.image} alt={data.data.title} />
                <div 
                onClick={(event) => addProductsToCart(event, data.data)}
                className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 m-2 p-1">
                    <PlusCircleIcon className="h-6 w-6 text-black"></PlusCircleIcon>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card