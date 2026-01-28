import { Link } from "react-router-dom";
import Circle from "../components/elements/Circle"

export default function TopicCard({ title, author, views, replys, time }) {
    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex items-start justify-between hover:border-[#0065F4] transition-colors duration-200">
            <div>
                <Link>
                    <h5 className="text-lg font-bold">{title}</h5>
                </Link>
                <div className="text-gray-500 flex items-center gap-x-3 mt-1.5 mr-1.5">
                    <span>{author}</span>
                    <Circle />
                    <span>{Number(views).toLocaleString()}</span>
                    <Circle />
                    <span>{Number(replys).toLocaleString()}</span>
                </div>
            </div>
            <span className="text-gray-500">{time}</span>
        </div>
    )
}
