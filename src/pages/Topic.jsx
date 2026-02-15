import AvatarPic from "../components/AvatarPic"
import Circle from "../components/elements/Circle"
import { useParams } from "react-router-dom"
import { useTopic } from "../features/topics/useTopic"
import { timeAgo } from "../utils/timeAgo"
import EducationStatus from "../components/elements/EducationStatus"
import CreatePostForm from "../features/topics/components/CreatePostForm"
import { useTopicPosts } from "../features/topics/useTopicPosts"
import Skeleton from "../components/skeleton/Skeleton"
import PostsCardSkeleton from "../components/skeleton/PostsCardSkeleton"

export default function Topic() {
  const { topicId } = useParams()
  const { topic, loading: topicLoading } = useTopic(topicId)
  const { posts, loading: postsLoading } = useTopicPosts(topicId)

  return (
    <main className="pt-15.5 max-w-250 mx-auto px-4 lg:px-2.5">
      <section className="mt-6">
        <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-6">
          خانه / انجمن ها / مهندسی کامپیوتر /
          <span className="font-normal">
            انتخاب واحد
          </span>
        </p>
        {topicLoading ? (
          <Skeleton className='h-7.5 w-45' />
        ) :
          (
            <h3>{topic?.title}</h3>
          )}


        <div className="flex items-center gap-x-3 text-gray-500 text-xs sm:text-sm mt-6">
          {topicLoading ? (
            <>
              <Skeleton className='h-5 w-25' />
              <Skeleton className='h-5 w-25' />
              <Skeleton className='h-5 w-25' />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>
      <section className="mt-7 space-y-3">
        {topicLoading ? (
          <PostsCardSkeleton />
        ) : (
          <div className="flex flex-col sm:flex-row gap-x-9 border border-black/15 py-5 px-6 sm:py-6 sm:px-9 rounded-lg bg-white">
            <div className="sm:w-30 flex sm:flex-col items-start sm:items-center gap-x-3">
              <AvatarPic author={topic?.author_name} size='2' />
              <div>
                <span className="sm:mt-1.5 font-semibold block">{topic?.author_name}</span>
                <span className="text-gray-500 text-xs tracking-rtl-tighter mt-1 block sm:hidden">
                  {timeAgo(topic?.created_at)}
                </span>
              </div>
              <EducationStatus degree={topic?.author_status} />
              <div className="text-gray-500 sm:flex flex-col text-center text-xs sm:mt-1.5 gap-y-0.5 hidden">
                <span>دانشگاه تهران</span>
                <span>۲۳۴ پست</span>
                <span>عضو از ۱۴۰۱</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="whitespace-pre-line text-right flex-1 font-semibold mt-5 sm:mt-0">
                {`${topic?.content}`}
              </p>
              <div className="w-full border-t border-black/15 mt-6"></div>

              <div className="flex items-center justify-between mt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="size-4 sm:size-4.5">
                      <use href="#arrow-top"></use>
                    </svg>
                    <span>۴۵</span>
                  </div>
                  <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="size-4 sm:size-4.5">
                      <use href="#reply"></use>
                    </svg>
                    <span>پاسخ</span>
                  </div>
                  <div className="hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                    <svg className="size-4 sm:size-4.5">
                      <use href="#share"></use>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-x-4 sm:gap-x-6">
                  <svg className="size-4 sm:size-4.5">
                    <use href="#save"></use>
                  </svg>
                  <svg className="size-4 sm:size-4.5">
                    <use href="#flag"></use>
                  </svg>
                  <svg className="size-4 sm:size-4.5">
                    <use href="#more"></use>
                  </svg>
                </div>
              </div>
              <span className="text-gray-500 text-xs tracking-rtl-tighter mt-4 sm:inline-block hidden">
                {timeAgo(topic?.created_at)}
              </span>

            </div>
          </div>
        )}

        {postsLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <PostsCardSkeleton />
          ))
        ) : (
          posts.map(item => (
            <div className="flex flex-col sm:flex-row gap-x-9 border border-black/15 py-5 px-6 sm:py-6 sm:px-9 rounded-lg bg-white">
              <div className="sm:w-30 flex sm:flex-col items-start sm:items-center gap-x-3">
                <AvatarPic author={item?.author_name} size='2' />
                <div>
                  <span className="sm:mt-1.5 font-semibold block">{item?.author_name}</span>
                  <span className="text-gray-500 text-xs tracking-rtl-tighter mt-1 block sm:hidden">
                    {timeAgo(item?.created_at)}
                  </span>
                </div>
                <EducationStatus degree={item.author_status} />
                <div className="text-gray-500 sm:flex flex-col text-center text-xs sm:mt-1.5 gap-y-0.5 hidden">
                  <span>دانشگاه تهران</span>
                  <span>۲۳۴ پست</span>
                  <span>عضو از ۱۴۰۱</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="whitespace-pre-line text-right flex-1 font-semibold mt-5 sm:mt-0">
                  {`${item.content}`}
                </p>

                <div className="w-full border-t border-black/15 mt-6"></div>

                <div className="flex items-center justify-between mt-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-x-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                      <svg className="size-4 sm:size-4.5">
                        <use href="#arrow-top"></use>
                      </svg>
                      <span>۴۵</span>
                    </div>
                    <div className="flex items-center gap-x-1 font-semibold hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                      <svg className="size-4 sm:size-4.5">
                        <use href="#reply"></use>
                      </svg>
                      <span>پاسخ</span>
                    </div>
                    <div className="hover:bg-blue-50 px-2 py-2 rounded-lg transition duration-150">
                      <svg className="size-4 sm:size-4.5">
                        <use href="#share"></use>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-4 sm:gap-x-6">
                    <svg className="size-4 sm:size-4.5">
                      <use href="#save"></use>
                    </svg>
                    <svg className="size-4 sm:size-4.5">
                      <use href="#flag"></use>
                    </svg>
                    <svg className="size-4 sm:size-4.5">
                      <use href="#more"></use>
                    </svg>
                  </div>
                </div>

                <span className="text-gray-500 text-xs tracking-rtl-tighter mt-4 sm:inline-block hidden">
                  {timeAgo(item.created_at)}
                </span>
              </div>
            </div>
          ))
        )}

        {!postsLoading && (
          <CreatePostForm
            topicId={topic?.id}
          />
        )}
      </section>
    </main>
  )
};