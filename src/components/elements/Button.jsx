import { useState } from "react"

function Button({value}) {
    const [pressed, setPressed] = useState(false)

    return (
        <button onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} className={`flex justify-center items-center py-3 text-2xl font-bold text-white bg-[#0065F4] rounded-xl w-full hover:shadow-[0_2px_20px_rgba(0,101,244,0.3)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:outline-none cursor-pointer transition-all ease-in-out ${pressed ? "scale-105" : "scale-100"}`}>
            {value}
        </button>
)
}

export default Button