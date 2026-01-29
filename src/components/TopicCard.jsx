import { Link } from "react-router-dom"
import Circle from "./elements/Circle"

export default function TopicCard({ title, author, views, replys, time, major }) {
    const word = author.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 1);

    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex items-start justify-between hover:border-[#0065F4] transition-colors duration-200">
            <div className="flex items-center gap-x-3 flex-1">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex justify-center items-center text-lg font-semibold">
                    {word}
                </div>
                <div>
                    <Link>
                        <h5 className="font-semibold">{title}</h5>
                    </Link>
                    <div className="text-gray-500 flex items-center gap-x-2 mt-2 mr-1.5 text-sm">
                        <span>{author}</span>
                        <Circle />
                        <span>{major}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-x-8 text-gray-500 text-sm basis-1/4">
                <div className="flex items-center gap-x-1">
                    <svg className="w-5 h-5">
                        <use href="#message"></use>
                    </svg>
                    {views}
                </div>
                <div className="flex items-center gap-x-1">
                    <svg className="w-5 h-5">
                        <use href="#eye"></use>
                    </svg>
                    {replys}
                </div>
            </div>
            <div className="text-left">
                <span className="text-black text-sm inline-block font-semibold">سارا احمدی</span>
                <div className="flex-1"></div>
                <span className="text-gray-500 text-sm inline-block mt-1.5">{time}</span>
            </div>
        </div>
    )
}
