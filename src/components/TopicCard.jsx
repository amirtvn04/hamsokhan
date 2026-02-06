import { Link } from "react-router-dom"
import Circle from "./elements/Circle"
import AvatarPic from "./AvatarPic"

export default function TopicCard({ topic_title, author_name, author_role, posts_count, created_at }) {
    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex items-start justify-between hover:border-[#0065F4] transition-colors duration-150">
            <div className="flex items-center gap-x-3 flex-1">
                <AvatarPic author={author_name} size='1' />
                <div>
                    <Link to='/topics/4'>
                        <h5 className="font-semibold">{topic_title}</h5>
                    </Link>
                    <div className="text-gray-500 flex items-center gap-x-2 mt-2 mr-1.5 text-sm">
                        <span>{author_name}</span>
                        <Circle />
                        <span>{author_role}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-x-8 text-gray-500 text-sm basis-1/4">
                <div className="flex items-center gap-x-1">
                    <svg className="w-5 h-5">
                        <use href="#message"></use>
                    </svg>
                    {posts_count}
                </div>
                <div className="flex items-center gap-x-1">
                    <svg className="w-5 h-5">
                        <use href="#eye"></use>
                    </svg>
                    ۳۳
                </div>
            </div>
            <div className="text-left">
                <span className="text-black text-sm inline-block font-semibold">سارا احمدی</span>
                <div className="flex-1"></div>
                <span className="text-gray-500 text-sm inline-block mt-1.5">{created_at}</span>
            </div>
        </div>
    )
}
