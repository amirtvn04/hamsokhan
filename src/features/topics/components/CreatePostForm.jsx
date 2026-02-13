import { useState } from "react"
import { useCreatePost } from "../useCreatePost"
import { useAuth } from "../../auth/useAuth"
import { Link } from "react-router-dom"

export default function CreatePostForm({ topicId, onCreated }) {
    const { user } = useAuth()
    const { createPost, loading, error } = useCreatePost()

    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!content.trim()) return

        await createPost({ topicId, content })
        setContent("")
        onCreated?.()
    }

    if (!user) {
        return (
            <form className="border border-black/15 py-6 px-9 rounded-lg bg-white">
                <span className="inline-block font-semibold">پاسخ خود را بنویسید</span>

                <p className="text-gray-500 mt-5">
                    برای ارسال پاسخ ابتدا
                    <Link to="../login" className='text-[#0065F4] font-bold underline underline-offset-2 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>
                        {" "}
                        وارد
                        {" "}
                    </Link>
                    حساب کاربری شوید.
                </p>
            </form>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="border border-black/15 py-6 px-9 rounded-lg bg-white">
            <span className="inline-block font-semibold">پاسخ خود را بنویسید</span>

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border mt-3 bg-black/5 border-black/15 rounded-lg min-h-40 p-4 hover:border-[#0065F4] focus:outline-2 outline-[#0065F4] focus:border-[#0065F4] transition-all duration-150"
                placeholder="پاسخ خود را بنویسید...">
            </textarea>

            <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-nowrap text-gray-500">توضیحات پاسخ</span>
                <button type='submit' disabled={loading} className="cursor-pointer px-7 py-1.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all">
                    {loading ? "در حال ارسال..." : "ارسال پاسخ"}
                </button>
            </div>
        </form>
    )
}
