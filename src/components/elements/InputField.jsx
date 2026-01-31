import { useState } from "react";

function InputField({ icon, type, CustomStyles, ...props }) {
    const isPassword = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative group w-full">
            <svg className="absolute top-1/2 transform -translate-y-1/2 right-5 w-6 h-6 text-gray-500 pointer-events-none group-focus-within:text-black">
                <use href={`#${icon}`}></use>
            </svg>

            {isPassword && (
                <svg onClick={() => setShowPassword(!showPassword)} className={`w-6 h-6 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer hover:text-black transition-color group-focus-within:text-black`}>
                    <use href={showPassword ? "#eye-slash" : "#eye"}></use>
                </svg>
            )}

            <input type={showPassword && isPassword ? 'text' : type} {...props} className={`input_field tracking-rtl-tight border border-black/15 rounded-xl hover:border-[#0065F4] focus:outline-[#0065F4] focus:border-[#0065F4] focus:outline-2 transition-all  ${CustomStyles}`} />
        </div >

    )
}

export default InputField