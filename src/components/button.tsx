import { ButtonHTMLAttributes, HTMLAttributes, HtmlHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

export default function Button(props:{variant: "primary" | "secondary";
    size?: 'sm'
} & ButtonHTMLAttributes<HTMLButtonElement>) {

    const classes = cva('h-9  rounded-full border px-6 font-medium text-base font-special-gothic ', {
        variants: {
            variant: {
                primary: 'bg-lime-400 text-neutral-950 border-lime-400',
                secondary: 'border-white bg-transparent text-white ',
            },
            size : {
                sm: "h-10",
            }
        }
    })
    const {variant, className,size,  ...otherProps} = props;
    return <button className={classes({variant,className, size})}
        {...otherProps}>
    </button>
}