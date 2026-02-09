import AvatarPic from "../components/AvatarPic"
import Circle from "../components/elements/Circle"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useTopic } from "../features/topics/useTopic"
import { timeAgo } from "../utils/timeAgo"
import EducationStatus from "../components/elements/EducationStatus"

export default function Topic() {
  const { topicSlug } = useParams()
  const { topic, posts, loading } = useTopic(topicSlug)

  return (
    <main className="pt-15.5 max-w-250 mx-auto px-4 lg:px-2.5">
      <section className="mt-6">
        <p className="text-sm text-gray-500 font-semibold mb-6">
          خانه / انجمن ها / مهندسی کامپیوتر /
          <span className="font-normal">
            انتخاب واحد
          </span>
        </p>

        <h3>{topic?.title}</h3>


        <div className="flex items-center gap-x-3 text-gray-500 text-sm mt-6">
          <div>
            {topic?.posts_count.toLocaleString('fa-IR')}
            {" "}
            پاسخ
          </div>
          <Circle />
          <div>
            ۱۳,۵۶۴
            {" "}
            بازدید
          </div>
          <Circle />
          <div>
            آخرین فعالیت: {timeAgo(topic?.created_at)}
          </div>
        </div>
      </section>
      <section className="mt-7 space-y-3">
        <div className="flex items-start gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
          <div className="max-w-32.5 flex flex-col items-center">
            <AvatarPic author={topic?.author_name} size='2' />
            <span className="mt-1.5 font-semibold">{topic?.author_name}</span>
            <EducationStatus degree={topic?.author_status} />
            <div className="text-gray-500 flex flex-col text-center text-xs mt-1.5 gap-y-0.5">
              <span>دانشگاه تهران</span>
              <span>۲۳۴ پست</span>
              <span>عضو از ۱۴۰۱</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <p className="whitespace-pre-line text-right">
              {`${topic?.content}`}
            </p>
            <div>
              <div className="w-full border-t border-black/15 mt-6"></div>

              <div className="flex items-center justify-between mt-6 text-sm">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#arrow-top"></use>
                    </svg>
                    <span>۴۵</span>
                  </div>
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#reply"></use>
                    </svg>
                    <span>پاسخ</span>
                  </div>
                  <div className="hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#share"></use>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-x-6">
                  <svg className="w-4.5 h-4.5">
                    <use href="#save"></use>
                  </svg>
                  <svg className="w-4.5 h-4.5">
                    <use href="#flag"></use>
                  </svg>
                  <svg className="w-4.5 h-4.5">
                    <use href="#more"></use>
                  </svg>
                </div>
              </div>
            <span className="text-gray-500 text-sm tracking-rtl-tighter mt-4 inline-block">
              {timeAgo(topic?.created_at)}
            </span>
            </div>

          </div>
        </div>

        {posts.map(item => (
          <div className="flex items-start gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
            <div className="max-w-32.5 flex flex-col items-center">
              <AvatarPic author={item.author_name} size='2' />
              <span className="mt-1.5 font-semibold">{item.author_name}</span>
              <EducationStatus degree={item.author_status} />
              <div className="text-gray-500 flex flex-col text-center text-xs mt-1.5 gap-y-0.5">
                <span>دانشگاه تهران</span>
                <span>۲۳۴ پست</span>
                <span>عضو از ۱۴۰۱</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="whitespace-pre-line text-right">
                {`
                ${item.content}
                `}
              </p>

              <div className="w-full border-t border-black/15 mt-6"></div>

              <div className="flex items-center justify-between mt-6 text-sm">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#arrow-top"></use>
                    </svg>
                    <span>۴۵</span>
                  </div>
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#reply"></use>
                    </svg>
                    <span>پاسخ</span>
                  </div>
                  <div className="hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="w-4.5 h-4.5">
                      <use href="#share"></use>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-x-6">
                  <svg className="w-4.5 h-4.5">
                    <use href="#save"></use>
                  </svg>
                  <svg className="w-4.5 h-4.5">
                    <use href="#flag"></use>
                  </svg>
                  <svg className="w-4.5 h-4.5">
                    <use href="#more"></use>
                  </svg>
                </div>
              </div>

              <span className="text-gray-500 text-sm tracking-rtl-tighter mt-4 inline-block">
                {timeAgo(item.created_at)}
              </span>
            </div>
          </div>
        ))}

        <div className="border border-black/15 py-6 px-9 rounded-lg bg-white">
          <span className="inline-block font-semibold">پاسخ خود را بنویسید</span>

          <textarea className="w-full border mt-3 bg-black/5 border-black/15 rounded-lg min-h-40 p-4 hover:border-[#0065F4] focus:outline-2 outline-[#0065F4] focus:border-[#0065F4] transition-all duration-150" name="" id="" placeholder="پاسخ خود را بنویسید..."></textarea>

          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-nowrap text-gray-500">توضیحات پاسخ</span>
            <Link to="/register" className="px-7 py-1.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all">
              ارسال پاسخ
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
};