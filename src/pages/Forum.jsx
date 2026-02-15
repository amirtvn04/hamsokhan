import { Link } from "react-router-dom"
import TopicCard from "../components/TopicCard"
import { useParams, Outlet } from "react-router-dom"
import { useTopics } from "../features/topics/useTopics"
import { useForums } from "../features/forums/useForums"
import Skeleton from "../components/skeleton/Skeleton"
import TopicCardSkeleton from "../components/skeleton/TopicCardSkeleton"

function Forum() {
  const { forumSlug } = useParams()
  const { topics, loading: topicLoading } = useTopics(forumSlug)

  const { forum, loading: forumLoading } = useForums(null, forumSlug)
  const forumId = forum?.id

  return (
    <main className="pt-15.5 container-uni">
      <section className="mt-6">
        <p className="text-sm text-gray-500 font-semibold mb-6">
          خانه / انجمن ها /
          <span className="font-normal">
            مهندسی کامپیوتر
          </span>
        </p>
        <div className="flex items-start justify-between">
          <div>
            {forumLoading ? (
              <>
                <Skeleton className='h-8 w-40' />
                <Skeleton className='h-6 w-72 mt-2' />
              </>
            ) : (
              <>
                <h3>{forum?.title}</h3>
                <p className="text-gray-500 font-semibold mt-3">
                  {forum?.description}
                </p>
              </>
            )}
          </div>

          <Link to={'new-topic'} className="px-6 py-2.5 flex items-center gap-x-0.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all font-semibold">
            <svg className="w-6 h-6">
              <use href="#plus"></use>
            </svg>
            تاپیک جدید
          </Link>
        </div>

        <div className="flex items-center gap-x-8 text-gray-500 text-sm mt-6">
          {!forumLoading ? (
            <>
              <div className="flex items-center gap-x-1">
                <svg className="w-4 h-4">
                  <use href="#message"></use>
                </svg>
                {forum?.topics_count?.toLocaleString('fa-IR')}
                {" "}
                تاپیک
              </div>
              <div className="flex items-center gap-x-1">
                <svg className="w-4 h-4">
                  <use href="#people"></use>
                </svg>
                {forum?.posts_count?.toLocaleString('fa-IR')}
                {" "}
                پست
              </div>
              <div className="flex items-center gap-x-1">
                <svg className="w-5 h-5">
                  <use href="#trending-up"></use>
                </svg>
                ۱۳,۵۶۴
                {" "}
                کاربر فعال
              </div>
            </>
          ) : (
            <>
              <Skeleton className='h-5 w-25' />
              <Skeleton className='h-5 w-25' />
              <Skeleton className='h-5 w-25' />
            </>
          )}

        </div>

        <div className="flex items-center justify-between mt-9">
          <div className="flex gap-x-3 tracking-rtl-tighter text-sm font-semibold">
            <div className="relative">
              <svg className="absolute w-5 h-5 -rotate-90 left-4 top-1/2 transform -translate-y-1/2">
                <use href="#chevron-left"></use>
              </svg>
              <svg className="absolute w-5 h-5 right-4 top-1/2 transform -translate-y-1/2">
                <use href="#clock"></use>
              </svg>
              <select className="h-10 custom-select border border-black/15 rounded-lg pr-10 pl-10 hover:border-[#0065F4] focus:outline-2 focus:border-[#0065F4] focus:outline-[#0065F4] transition duration-150" name="" id="">
                <option value="">جدید ترین</option>
              </select>
            </div>

            <select className="h-10 custom-select border border-black/15 rounded-lg px-4 hover:border-[#0065F4] focus:outline-2 focus:border-[#0065F4] focus:outline-[#0065F4] transition duration-150" name="" id="">
              <option value="">محبوب ترین</option>
            </select>

            <select className="h-10 custom-select border border-black/15 rounded-lg px-4 hover:border-[#0065F4] focus:outline-2 focus:border-[#0065F4] focus:outline-[#0065F4] transition duration-150" name="" id="">
              <option value="">بدون پاسخ</option>
            </select>
          </div>
          <p className="text-gray-500 text-sm">نمایش ۱-۱۰ از ۱۲,۴۵۰</p>
        </div>
      </section>

      <section className="mt-5 space-y-3">
        {topicLoading ?
          Array.from({ length: 6 }).map((_, i) => (
            <TopicCardSkeleton key={i} />
          ))
          :
          topics.map(item => (
            <TopicCard key={item.topic_id} {...item} />
          ))
        }


      </section>

      {/* <div className="flex">
        <div className="pagination flex items-center text-center gap-x-1 mt-5 mx-auto">
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">قبلی</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۱</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۲</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۳</div>
          <div>...</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۸</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۹</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">۱۰</div>
          <div className="bg-white px-2 py-1.5 min-w-10 rounded-lg border border-black/15">بعدی</div>
        </div>
      </div> */}

      <Outlet context={{ forumId }} />
    </main>
  )
}

export default Forum