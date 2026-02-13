import AvatarPic from "../components/AvatarPic"
import Circle from "../components/elements/Circle"
import { useParams } from "react-router-dom"
import { useTopic } from "../features/topics/useTopic"
import { timeAgo } from "../utils/timeAgo"
import EducationStatus from "../components/elements/EducationStatus"
import CreatePostForm from "../features/topics/components/CreatePostForm"
import { useTopicPosts } from "../features/topics/useTopicPosts"

export default function Topic() {
  const { topicId } = useParams()
  const { topic } = useTopic(topicId)
  const { posts } = useTopicPosts(topicId)

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
        <div className="flex gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
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
          <div className="flex-1 flex flex-col">
            <p className="whitespace-pre-line text-right flex-1">
              {`${topic?.content}`}
            </p>
            <div className="w-full border-t border-black/15 mt-6"></div>

            <div className="flex items-center justify-between mt-4 text-sm">
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
            <span className="text-gray-500 text-xs tracking-rtl-tighter mt-4 inline-block">
              {timeAgo(topic?.created_at)}
            </span>

          </div>
        </div>

        {posts.map(item => (
          <div className="flex gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
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
            <div className="flex-1 flex flex-col">
              <p className="whitespace-pre-line text-right flex-1">
                {`${item.content}`}
              </p>

              <div className="w-full border-t border-black/15 mt-6"></div>

              <div className="flex items-center justify-between mt-4 text-sm">
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

              <span className="text-gray-500 text-xs tracking-rtl-tighter mt-4 inline-block">
                {timeAgo(item.created_at)}
              </span>
            </div>
          </div>
        ))}

        <CreatePostForm
          topicId={topic?.id}
        />
      </section>
    </main>
  )
};