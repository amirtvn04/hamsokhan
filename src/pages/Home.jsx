import { Link } from "react-router-dom"
import HotCategoryCard from "../components/HotCategoryCard"
import HotTopicCard from "../components/HotTopicCard"
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CategoryCard from "../components/CategoryCard";
import { useCategories } from "../features/forums/useCategories"
import CategoryCardSkeleton from "../components/skeleton/CategoryCardSkeleton";
import { useHotTopics } from "../features/topics/useHotTopics";
import TopicCard from "../components/TopicCard";
import TopicCardSkeleton from "../components/skeleton/TopicCardSkeleton";

function Home() {
  const { categories, Categoryloading } = useCategories();
  const { topics: hotTopics, loading: hotLoading } = useHotTopics()
console.log(hotTopics)
  return (
    <main>
      <section>
        <div className="text-center min-h-dvh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center flex-1 justify-center bg-linear-to-b from-[#2564eb23] to-[#fafafa] w-full shrink-0">
            <div className="container-uni flex flex-col py-20">
              <h1 className="font-doran text-2xl sm:text-3xl font-bold text-balance">یونی گپ؛ جامعه آنلاین دانشجویان دانشگاه‌های ایران</h1>
              <p className="text-lg sm:text-xl text-gray-500 mt-7 font-semibold tracking-rtl-tighter">محیطی برای پرسش، تبادل تجربه و گفتگو در انجمن‌های تخصصی دانشگاهی</p>
              <div className="flex items-center gap-x-3 mt-16 mx-auto">
                <Link to="/register" className="px-5 sm:px-9 py-2.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all font-semibold">
                  عضویت رایگان
                </Link>
                <Link to="/forums" className="px-5 sm:px-9 py-2.5 rounded-lg bg-white border border-black/15 text-black hover:bg-gray-100 focus:bg-gray-100 transition-all font-semibold">
                  مشاهده انجمن‌ها
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border-y border-black/15 flex items-center justify-around w-full py-6 sm:py-10">
            <div className="flex flex-col items-center">
              <svg className="size-7 sm:size-8 text-primary">
                <use href="#chat-bubble"></use>
              </svg>
              <span className="text-xl sm:text-2xl font-bold mt-1">۸۵۰,۰۰۰+</span>
              <span className="text-gray-500 text-xs sm:text-sm">پست و پاسخ</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="size-7 sm:size-8 text-primary">
                <use href="#trending-up"></use>
              </svg>
              <span className="text-xl sm:text-2xl font-bold mt-1">۱۲۰,۰۰۰+</span>
              <span className="text-gray-500 text-xs sm:text-sm">کاربر فعال</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="size-7 sm:size-8 text-primary">
                <use href="#users"></use>
              </svg>
              <span className="text-xl sm:text-2xl font-bold mt-1">۲۵,۰۰۰+</span>
              <span className="text-gray-500 text-xs sm:text-sm">تاپیک فعال</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-20 sm:mt-30">
          <div className="flex justify-between items-center mb-6">
            <h3>دسته بندی های محبوب</h3>
            <Link to='/categories' className="flex text-lg items-center text-primary hover:text-[#003d93] transition-colors hover:bg-[rgba(0,102,244,0.05)] hover:border-[rgba(0,102,244,0.20)] rounded-lg px-4 py-2 border border-[rgba(0,0,0,0)]">
              <span className="font-doran text-base sm:text-lg">مشاهده همه</span>
              <svg className="w-5 h-5 mr-2">
                <use href="#arrow-left"></use>
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {/* <HotCategoryCard index='0' title='مهندسی کامپیوتر' counter='۱۵,۳۰۰' icon='code' />
            <HotCategoryCard index='1' title='علوم پایه' counter='۴,۵۷۷' icon='science' />
            <HotCategoryCard index='2' title='فرصت های شغلی' counter='۳,۴۳۲' icon='suitcase' />
            <HotCategoryCard index='3' title='زندگی دانشجویی' counter='۶,۴۴۳' icon='education' />
            <HotCategoryCard index='4' title='پروژه ها و ایده ها' counter='۶,۶۶۴' icon='idea' />
            <HotCategoryCard index='5' title='گفتگوی آزاد' counter='۲,۳۲۴' icon='tea' /> */}

            {Categoryloading ?
              Array.from({ length: 6 }).map((_, i) => (
                <CategoryCardSkeleton key={i} />
              ))
              :
              categories
                .slice(0, 6)
                .map(cat => (
                  <CategoryCard key={cat.id} {...cat} />
                ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-20 sm:mt-30">
          <div className="flex justify-between items-center mb-6">
            <h3>تاپیک های داغ امروز</h3>
            <Link to='/forums' className="flex text-lg items-center text-primary hover:text-[#003d93] transition-colors hover:bg-[rgba(0,102,244,0.05)] hover:border-[rgba(0,102,244,0.20)] rounded-lg px-4 py-2 border border-[rgba(0,0,0,0)]">
              <span className="font-doran text-lg">مشاهده همه</span>
              <svg className="w-5 h-5 mr-2">
                <use href="#arrow-left"></use>
              </svg>
            </Link>
          </div>

          <div className="space-y-3">
            {/* <HotTopicCard title='راهنمای انتخاب واحد ترم بهار ۱۴۰۳' author='علی محمدی' replys='۲۴۳' views='۳۳' time='۲ ساعت پیش' />
            <HotTopicCard title='بهترین منابع یادگیری React و Next.js' author='علی محمدی' replys='۲۳۱' views='۲۳۲' time='۲ ساعت پیش' />
            <HotTopicCard title='تجربه کارآموزی در شرکت‌های بزرگ' author='علی محمدی' replys='۶۵۴' views='۶۴۴' time='۲ ساعت پیش' />
            <HotTopicCard title='منابع آمادگی برای مصاحبه شرکت‌های بزرگ' author='علی محمدی' replys='۳۴۳' views='۴۵۴' time='۲ ساعت پیش' />
            <HotTopicCard title='آموزش Git و GitHub برای مبتدی‌ها' author='علی محمدی' replys='۴۴' views='۷۷۶' time='۲ ساعت پیش' /> */}

            {hotLoading ?
              Array.from({ length: 6 }).map((_, i) => (
                <TopicCardSkeleton key={i} />
              ))
              :
              hotTopics?.map(item => (
                <TopicCard key={item.topic_id} topic_title={item.title} {...item} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-20 sm:mt-30">
          <div className="relative overflow-hidden">

            <h3 className="mb-6">نظرات کاربران درباره یونی‌گپ</h3>

            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni text-center sm:text-right">
          <div className="sm:flex items-center justify-between gap-x-6 bg-primary rounded-lg px-7 py-7 sm:px-15 sm:py-17 mt-12">
            <div className="sm:w-[55%] text-white">
              <h5 className="text-lg sm:text-xl font-doran font-bold">به جمع دانشجویان فعال بپیوندید!</h5>
              <p className="mt-1 sm:mt-6 text-base sm:text-lg leading-9 text-white/90">به جمع یونی‌گپی‌ها بپیوندید و در فضایی امن و دوستانه، سؤال بپرسید، تجربه‌هایتان را به اشتراک بگذارید و از دانش و تجربه دیگران استفاده کنید.</p>
            </div>
            <Link to='/register' className="py-2 px-5 sm:py-4 mt-3 sm:mt-0 inline-block rounded-xl bg-white text-primary sm:px-15 text-center text-lg font-semibold">
              ثبت‌نام و شروع گفتگو
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home