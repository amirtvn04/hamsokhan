import { Link } from "react-router-dom";
import Circle from "./elements/Circle"

export default function HotTopicCard({ title, author, views, replys, time }) {
    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex items-start justify-between hover:border-[#0065F4] transition-colors duration-200">
            <div>
                <Link>
                    <h5 className="font-semibold">{title}</h5>
                </Link>
                <div className="text-gray-500 flex items-center gap-x-2 mt-2 mr-1.5 text-sm">
                    <span>{author}</span>
                    <Circle />
                    <span>
                        {views}
                        {" "}
                        بازدید
                    </span>
                    <Circle />
                    <span>
                        {replys}
                        {" "}
                        پاسخ
                    </span>
                </div>
            </div>
            <span className="text-gray-500 text-sm">{time}</span>
        </div>
    )
}
