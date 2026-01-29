import { Link } from "react-router-dom";

const colorVariants = [
    { bg: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-300' },
    { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-300' },
    { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' },
    { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' },
    { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-300' },
    { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-300' },
];

export default function HotCategoryCard({ title, counter, icon, index = 0 }) {
    
    
    const color = colorVariants[index];
    
    return (
        <div className="bg-white border border-black/15 rounded-lg px-7 py-6 hover:border-[#0065F4] transition-colors duration-200">
            <div className={`p-3 rounded-lg ${color.bg} border ${color.border} inline-block `} >
                <svg className={`w-6 h-6 ${color.text}`}>
                    <use href={"#" + icon}></use>
                </svg>
            </div>
            <Link>
            <h5 className="tex font-semibold mt-3">{title}</h5>
            </Link>
            <span className="text-gray-500 mt-1 inline-block text-sm">{counter}
                {" "}
                تاپیک
            </span>

        </div>
    )
}
