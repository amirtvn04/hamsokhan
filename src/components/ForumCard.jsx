import { Link } from "react-router-dom";
import Circle from "./elements/Circle"

export default function ForumCard({ title, description, last_author_name, topics_count, posts_count, last_activity_at, slug }) {
    return (
        <div className="py-5 px-6 rounded-lg bg-white border border-black/15 hover:border-[#0065F4] transition-colors duration-150">
            <div className="flex items-start justify-between">
                <div>

                    <Link to={`/forums/${slug}`}>
                        <h5 className="font-semibold">{title}</h5>
                    </Link>
                    <p className="text-gray-500 text-sm mt-2">{description}</p>
                </div>

                <svg className="w-6 h-6">
                    <use href="#chevron-left"></use>
                </svg>
            </div>

            <div className="border-t border-black/15 w-full my-4"></div>

            <div className="text-gray-500 flex items-center justify-between mt-2 mr-1.5 text-sm w-full">
                <div className="flex items-center gap-x-8">
                    <div className="flex items-center gap-x-1">
                        <svg className="w-5 h-5 text-gray-500">
                            <use href="#message"></use>
                        </svg>
                        {topics_count.toLocaleString('fa-IR')}
                        {" "}
                        تاپیک
                    </div>
                    <div className="flex items-center gap-x-1">
                        <svg className="w-5 h-5 text-gray-500">
                            <use href="#people"></use>
                        </svg>
                        {posts_count.toLocaleString('fa-IR')}
                        {" "}
                        پست
                    </div>
                </div>
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <svg className="w-5 h-5 text-gray-500">
                            <use href="#clock"></use>
                        </svg>
                        <span className="text-black">{last_author_name}</span>
                    </div>
                    <Circle />
                    <span className="text-gray-500 text-sm">{last_activity_at}</span>
                </div>
            </div>
        </div>
    )
}
