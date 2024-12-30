import cn from "clsx";


interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
    const formattedPrice = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
    return (

        <span className={cn('text-lg font-semibold text-darkColor', className)}>{formattedPrice}</span>
    )
}
export default PriceFormatter