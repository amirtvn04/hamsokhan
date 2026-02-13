import { useState } from 'react'
import { Modal } from '../../../components/ui/Modal'
import { useCreateTopic } from '../useCreateTopic'
import { useNavigate, useOutletContext } from 'react-router-dom'

export function CreateTopicModal() {
    const { forumId } = useOutletContext()
    const { createTopic, loading, error } = useCreateTopic()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleClose = () => {
        navigate(-1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title.trim() || !content.trim()) return

        try {
            const topic = await createTopic({
                forumId,
                title,
                content
            })

            navigate(`/topics/${topic.id}`)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Modal onClose={handleClose} title="ایجاد تاپیک جدید">
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block fonse text-sm">عنوان</label>
                    <input
                        className="tracking-rtl-tighter w-full border mt-2 bg-black/5 border-black/15 rounded-lg px-3 py-2 hover:border-[#0065F4] focus:outline-2 outline-[#0065F4] focus:border-[#0065F4] transition-all duration-150"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        maxLength={150}
                        required
                    />
                </div>

                <div>
                    <label className="block fonse text-sm">متن</label>
                    <textarea
                        className="tracking-rtl-tight w-full border mt-2 bg-black/5 border-black/15 rounded-lg min-h-40 px-3 py-2 hover:border-[#0065F4] focus:outline-2 outline-[#0065F4] focus:border-[#0065F4] transition-all duration-150"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                        placeholder='نظر خود را وارد کنید...'
                    />
                </div>

                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}

                <p className='text-sm mt-7 text-gray-500 text-justify tracking-rtl-tighter'>
                    * لطفا در مورد اینجاد تاپیک و نظرسنجی قبل از ثبت دقت فرمایید زیرا امکان ویرایش و یا حذف مطلب بعد از ارسال وجود ندارد. همچنین شما ملزم به <span className='text-[#0065F4] font-bold underline underline-offset-2 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>رعایت قوانین و مقررات یونی‌گپ</span> نیز می‌باشید.
                </p>

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        type="button"
                        className="font-semibold cursor-pointer px-5 py-2 text-sm hover:bg-black/5 rounded-lg border border-[rgba(0,0,0,0)] hover:border-black/15 transition-colors"
                        onClick={handleClose}
                    >
                        لغو
                    </button>

                    <button
                        type="submit"
                        disabled={loading}
                        className="font-semibold cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white disabled:opacity-50"
                    >
                        {loading ? 'در حال ارسال...' : 'ثبت تاپیک'}
                    </button>
                </div>
            </form>
        </Modal>
    )
}
