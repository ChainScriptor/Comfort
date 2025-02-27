import { Product } from "@/sanity.types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
    console.log(product)
    return (
        <div className="group text-sm rounded-lg">
            <div className="bg-gradient-to-r from-zinc-200  via-zinc-300 to-zinc-200 overflow-hidden rounded-tl-lg rounded-tr-lg relative">
                {product?.images && <Link href={`/product/${product?.slug?.current}`}>
                    <Image src={urlFor(product.images[0]).url()} width={500} height={500} alt="product" priority className={`w-full h-72 object-contain overflow-hidden  hoverEffect ${product?.stock === 0 ? "opacity-80" : "group-hover:scale-105"} `} />
                </Link>}
                {product?.stock === 0 && (
                    <div className="absolute top-0  left-0 w-full h-full bg-darkColor/50 flex items-center justify-center">
                        <p className="text-xl  text-white font-semibold text-center">Out of stock</p></div>
                )}
            </div>
            <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
                <h2 className="font-semibold line-clamp-1">{product?.name}</h2>
                <p>{product?.intro}</p>
                <PriceView className="text-lg" price={product?.price} discount={product?.discount} />
                <AddToCartButton product={product} />
            </div>
        </div >
    )
}
export default ProductCard