import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    product: Product;
    className?: string;
}


const QuantityButtons = ({ product, className }: Props) => {
    const itemCount = 4;
    return (
        <div className={cn("flex items-center gap-1  text-base pb-1", className)}>
            <Button variant="outline" className="w-6 h-6">
                <Minus />
            </Button>
            <span className="font-semibold w-8 text-center text-darkColor">{itemCount}</span>
            <Button variant="outline" className="w-6 h-6">
                <Plus />
            </Button>
        </div>
    )
}
export default QuantityButtons