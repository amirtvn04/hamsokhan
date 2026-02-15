import { Link } from "react-router-dom";
import Circle from "./elements/Circle"
import { timeAgo } from "../utils/timeAgo";

export default function ForumCard({ title, description, last_author_name, topics_count, posts_count, last_activity_at, slug }) {
    return (
        <div className="py-5 px-6 rounded-lg bg-white border border-black/15 hover:border-[#0065F4] transition-colors duration-150">
            <div className="flex items-start justify-between">
                <div>

                    <Link to={`/forums/${slug}`}>
                        <h5 className="font-semibold hover:text-[#0065F4] transition duration-150">{title}</h5>
                    </Link>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2 font-semibold">{description}</p>
                </div>
                <Link to={`/forums/${slug}`}>
                    <svg className="size-5 sm:size-6 cursor-pointer">
                        <use href="#chevron-left"></use>
                    </svg>
                </Link>
            </div>

            <div className="border-t border-black/15 w-full my-4"></div>

            <div className="text-gray-500 flex items-center justify-between mt-2 mr-1.5 text-xs sm:text-sm w-full font-semibold">
                <div className="flex items-center gap-x-4 sm:gap-x-8">
                    <div className="flex items-center gap-x-1">
                        <svg className="size-4 sm:size-5 text-gray-500">
                            <use href="#message"></use>
                        </svg>
                        {topics_count.toLocaleString('fa-IR')}
                        {" "}
                        تاپیک
                    </div>
                    <div className="flex items-center gap-x-1">
                        <svg className="size-4 sm:size-5 text-gray-500">
                            <use href="#people"></use>
                        </svg>
                        {posts_count.toLocaleString('fa-IR')}
                        {" "}
                        پست
                    </div>
                </div>
                <div className="flex items-center gap-x-1 sm:gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <svg className="size-4 sm:size-5 text-gray-500">
                            <use href="#clock"></use>
                        </svg>
                        <span className="text-black hidden sm:inline-block">{last_author_name}</span>
                    </div>
                    <div className="hidden sm:inline-block">
                        <Circle />
                    </div>
                    <span title={new Date(last_activity_at).toLocaleString('fa-IR')} className="text-gray-500 text-xs sm:text-sm">{timeAgo(last_activity_at)}</span>
                </div>
            </div>
        </div>
    )
}
