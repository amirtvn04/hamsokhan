import { Link } from "react-router-dom"
import CategoryCard from "../components/CategoryCard"
import TopicCard from "../components/TopicCard"
import TestimonialsCarousel from "../components/TestimonialsCarousel";

function Home() {
  return (
    <main>
      <section>
        <div className="text-center min-h-screen flex flex-col justify-center items-center pt-15.5">
          <div className="flex flex-col items-center flex-1 justify-center bg-linear-to-b from-[#2564eb23] to-[#fafafa] w-full shrink-0">
            <div className="container-uni flex flex-col py-20">
              <h1 className="font-doran text-4xl font-bold">جامعه دانشجویی آنلاین دانشگاه‌های ایران</h1>
              <p className="text-2xl text-gray-500 mt-7 font-bold">بزرگ‌ترین تالار گفت‌وگوی دانشجویی برای تبادل دانش، تجربه و یافتن پاسخ پرسش‌های درسی و دانشگاهی.</p>
              <div className="flex items-center gap-x-3 mt-16 text-xl mx-auto">
                <Link to="/register" className="px-9 py-2.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all font-bold">
                  عضویت رایگان
                </Link>
                <Link to="/forums" className="px-9 py-2.5 rounded-lg bg-white border border-black/15 text-black hover:bg-gray-100 focus:bg-gray-100 transition-all font-bold">
                  مشاهده انجمن‌ها
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border-y border-black/15 flex items-center justify-around w-full py-10">
            <div className="flex flex-col items-center">
              <svg className="w-9 h-9 text-primary">
                <use href="#chat-bubble"></use>
              </svg>
              <span className="text-3xl font-black mt-2">+۸۵۰,000</span>
              <span className="text-gray-500">پست و پاسخ</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-9 h-9 text-primary">
                <use href="#trending-up"></use>
              </svg>
              <span className="text-3xl font-black mt-2">+۱۲۰,000</span>
              <span className="text-gray-500">کاربر فعال</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-9 h-9 text-primary">
                <use href="#users"></use>
              </svg>
              <span className="text-3xl font-black mt-2">+25,000</span>
              <span className="text-gray-500">تاپیک فعال</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-30">
          <div className="flex justify-between items-center mb-6">
            <h3>دسته بندی های محبوب</h3>
            <Link to='/category' className="flex text-lg items-center text-primary hover:text-[#003d93] transition-colors hover:bg-[rgba(0,102,244,0.05)] hover:border-[rgba(0,102,244,0.20)] rounded-lg px-4 py-2 border border-[rgba(0,0,0,0)]">
              <span className="font-doran text-lg">مشاهده همه</span>
              <svg className="w-5 h-5 mr-2">
                <use href="#arrow-left"></use>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <CategoryCard index='0' title='مهندسی کامپیوتر' counter='15300' icon='code' />
            <CategoryCard index='1' title='علوم پایه' counter='4577' icon='science' />
            <CategoryCard index='2' title='فرصت های شغلی' counter='5345' icon='suitcase' />
            <CategoryCard index='3' title='زندگی دانشجویی' counter='2342' icon='education' />
            <CategoryCard index='4' title='پروژه ها و ایده ها' counter='4464' icon='idea' />
            <CategoryCard index='5' title='گفتگوی آزاد' counter='14000' icon='tea' />
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-30">
          <div className="flex justify-between items-center mb-6">
            <h3>تاپیک های داغ امروز</h3>
            <Link to='/category' className="flex text-lg items-center text-primary hover:text-[#003d93] transition-colors hover:bg-[rgba(0,102,244,0.05)] hover:border-[rgba(0,102,244,0.20)] rounded-lg px-4 py-2 border border-[rgba(0,0,0,0)]">
              <span className="font-doran text-lg">مشاهده همه</span>
              <svg className="w-5 h-5 mr-2">
                <use href="#arrow-left"></use>
              </svg>
            </Link>
          </div>

          <div className="space-y-3">
            <TopicCard title='راهنمای انتخاب واحد ترم بهار ۱۴۰۳' author='علی محمدی' replys='245' views='455' time='۲ ساعت پیش' />
            <TopicCard title='بهترین منابع یادگیری React و Next.js' author='علی محمدی' replys='435' views='4755' time='۲ ساعت پیش' />
            <TopicCard title='تجربه کارآموزی در شرکت‌های بزرگ' author='علی محمدی' replys='455' views='455' time='۲ ساعت پیش' />
            <TopicCard title='منابع آمادگی برای مصاحبه شرکت‌های بزرگ' author='علی محمدی' replys='45' views='4595' time='۲ ساعت پیش' />
            <TopicCard title='آموزش Git و GitHub برای مبتدی‌ها' author='علی محمدی' replys='457' views='455' time='۲ ساعت پیش' />
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni mt-30">
          <div className="relative overflow-hidden">

          <h3 className="mb-6">نظرات کاربران درباره هم‌سخن</h3>

          <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <section>
        <div className="container-uni">
          <div className="flex items-center justify-between gap-x-6 bg-primary rounded-lg px-15 py-20 my-30">
            <div className="w-[55%] text-white">
              <h5 className="text-xl font-doran font-bold">به جمع دانشجویان فعال بپیوندید!</h5>
              <p className="mt-6 text-xl leading-9 text-white/90">به جمع هم‌سخن‌ها بپیوندید و در فضایی امن و دوستانه، سؤال بپرسید، تجربه‌هایتان را به اشتراک بگذارید و از دانش و تجربه دیگران استفاده کنید.</p>
            </div>
            <Link to='/register' className="py-4 rounded-xl bg-white text-primary px-20 text-center text-xl font-bold">
              ثبت‌نام و شروع گفتگو
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home