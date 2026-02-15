import { Link } from "react-router-dom"
import Circle from "./elements/Circle"
import AvatarPic from "./AvatarPic"
import { timeAgo } from "../utils/timeAgo"
import { academic_degree } from "../utils/degrees"

export default function TopicCard({ topic_id, topic_title, author_name, author_status, posts_count, created_at }) {
    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex justify-between hover:border-[#0065F4] transition-colors duration-150">
            <div className="flex items-center gap-x-3 flex-1">
                <div className="hidden sm:inline-block">
                    <AvatarPic author={author_name} size='1' />
                </div>
                <div>
                    <Link to={`/topics/${topic_id}`}>
                        <h5 className="font-semibold hover:text-[#0065F4] transition duration-150 line-clamp-1 text-ellipsis max-w-60">{topic_title}</h5>
                    </Link>
                    <div className="text-gray-500 flex items-center gap-x-2 mt-2 sm:mr-1.5 text-xs sm:text-sm font-semibold">
                        <span>{author_name}</span>
                        <div className="hidden sm:inline-block">
                            <Circle />
                        </div>
                        <span className="hidden sm:inline-block">{academic_degree(author_status)}</span>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex gap-x-8 text-gray-500 text-sm basis-1/4 items-start">
                <div className="flex items-center gap-x-1">
                    <svg className="w-5 h-5">
                        <use href="#message"></use>
                    </svg>
                    {posts_count.toLocaleString('fa-IR')}
                </div>
                <div className="items-center gap-x-1 flex">
                    <svg className="w-5 h-5">
                        <use href="#eye"></use>
                    </svg>
                    ۳۳
                </div>
            </div>
            <div className="flex flex-col items-end justify-between w-35 text-xs sm:text-sm font-semibold">
                <span className="text-black font-semibold text-nowrap line-clamp-1 hidden sm:inline-block">سارا احمدی</span>
                <div className="flex sm:hidden items-center gap-x-1 text-gray-500">
                    <svg className="w-4 h-4">
                        <use href="#message"></use>
                    </svg>
                    {posts_count.toLocaleString('fa-IR')}
                </div>
                <time title={new Date(created_at).toLocaleString('fa-IR')} className="text-gray-500 inline-block ">
                    {timeAgo(created_at)}
                </time>
            </div>
        </div>
    )
}
