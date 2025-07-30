import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: `${styles.buttonElement}`,
        secondary: `${styles.buttonSecondryElement}`
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} cursor-pointer ${sizeClasses[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
}