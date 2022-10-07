import React from "react"
import "./styles.scss"

type Tprops = {
    buttonName: string
    btncolor?: string
    btnNameColor?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Tprops> = ({ buttonName, btncolor, btnNameColor, ...props }) => {
    return (
        <button style={{ color: btnNameColor ?? "#000", background: btncolor ?? "#fff" }} {...props}>
            {buttonName}
        </button>
    )
}