import { forwardRef } from "react";
import styles from "./Input.module.scss"
import { Phone } from "lucide-react";
interface InputElement extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input = forwardRef<HTMLInputElement, InputElement>(
    ({ label, error, className, ...props }, ref) => {
        return (
        <div className="flex flex-col " >
            {label && <label >{label}</label>}
            <div className="relative mt-2 flex items-center">
                <input ref={ref} className={`${className || ""} ${styles.inputElement} ${error ? styles.hasError : ""}`} {...props} />
                <Phone className="absolute left-5" size={20} />
            </div>
            {error && <span className={`mt-3 ${styles.errorText}`} >{error}</span>}
        </div>
        )
    }
)

Input.displayName = 'Input'
export default Input