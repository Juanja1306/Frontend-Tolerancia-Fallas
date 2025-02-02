import { ReactNode } from "react"
import styles from "./ErrorMessage.module.css"
type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className={styles.error__message}>
            {children}
        </div>
    )
}