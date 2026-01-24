import { useState } from "react";

function InputField({ icon, type, CustomStyles, ...props }) {
    const isPassword = type === "password";
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("")

    return (
        <div className="relative group">
            <svg className="absolute top-1/2 transform -translate-y-1/2 right-5 w-6 h-6 text-gray-500 pointer-events-none group-focus-within:text-black">
                <use href={`#${icon}`}></use>
            </svg>

            {isPassword && (
                <svg onClick={() => setShowPassword(!showPassword)} className={`w-6 h-6 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer hover:text-black transition-all opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:inline-block group-focus-within:opacity-100 group-focus-within:text-black ${value ? "opacity-100 inline-block" : ""}`}>
                    <use href={showPassword ? "#eye-slash" : "#eye"}></use>
                </svg>
            )
            }

            <input value={value} onChange={(e) => setValue(e.target.value)} type={showPassword && isPassword ? 'text' : type} {...props} className={`input_field border border-black/30 rounded-xl hover:border-black/75 focus:outline-[#0065F4] focus:border-[#0065F4] focus:outline-2 transition-all  ${CustomStyles}`} />
        </div >

    )
}

export default InputField