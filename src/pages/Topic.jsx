import AvatarPic from "../components/AvatarPic"
import Circle from "../components/elements/Circle"
import { Link } from "react-router-dom"

export default function Topic() {
  return (
    <main className="pt-15.5 max-w-250 mx-auto px-4 lg:px-2.5">
      <section className="mt-6">
        <p className="text-sm text-gray-500 font-semibold mb-6">
          خانه / انجمن ها / مهندسی کامپیوتر /
          <span className="font-normal">
            انتخاب واحد
          </span>
        </p>

        <h3>راهنمای انتخاب واحد ترم بهار ۱۴۰۳</h3>

        <div className="flex items-center gap-x-3 text-gray-500 text-sm mt-6">
          <div>
            ۶۴
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
            آخرین فعالیت: ۲ ساعت پیش
          </div>
        </div>
      </section>
      <section className="mt-7 space-y-3">
        <div className="flex items-start gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
          <div className="max-w-32.5 flex flex-col items-center">
            <AvatarPic author='تست' size='1' />
            <span className="mt-1.5 font-semibold">علی محمدی</span>
            <span className="bg-sky-100 text-sky-700 rounded-lg text-xs font-semibold px-2 py-1 mt-1.5">دانشجوی کارشناسی</span>
            <div className="text-gray-500 flex flex-col text-center text-xs mt-1.5 gap-y-0.5">
              <span>دانشگاه تهران</span>
              <span>۲۳۴ پست</span>
              <span>عضو از ۱۴۰۱</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-line text-right">
              {`سلام به همه دوستان دانشجوی عزیز 👋
              
              با توجه به نزدیک شدن زمان انتخاب واحد برای ترم بهار ۱۴۰۳، تصمیم گرفتم تجربیات و نکاتی که در این سال‌ها یاد گرفتم را با شما به اشتراک بگذارم.
              
              ## نکات مهم انتخاب واحد:
              
              ### ۱. برنامه‌ریزی زمانی
              قبل از انتخاب واحد، حتماً برنامه روزانه خودتون رو بررسی کنید. اگه کار می‌کنید یا فعالیت‌های دیگه‌ای دارید، تعداد واحدهای کمتری بردارید.
              
              ### ۲. بررسی اساتید
              از سایت‌هایی مثل استادیار و یا از دوستان ترم‌های بالاتر درباره اساتید سوال کنید. انتخاب استاد مناسب خیلی مهمه.
              
              ### ۳. پیش‌نیازها
              حتماً به پیش‌نیازها دقت کنید. بعضی وقت‌ها می‌شه درس رو پاس کنی ولی برای درس بعدی مشکل پیدا می‌کنی.
              
              ### ۴. ترکیب دروس
              سعی کنید ترکیب دروس سخت و آسون رو رعایت کنید. همه دروس سخت رو با هم نبرید.
              
              اگه سوالی دارید خوشحال میشم کمک کنم 😊 `}
            </p>

            <div className="w-full border-t border-black/15 mt-6"></div>

            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#arrow-top"></use>
                  </svg>
                  <span>۴۵</span>
                </div>
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#reply"></use>
                  </svg>
                  <span>پاسخ</span>
                </div>
                <div className="hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
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

            <span className="text-gray-500 text-sm tracking-rtl-tighter mt-4 inline-block">۲ ساعت پیش</span>
          </div>
        </div>
        <div className="flex items-start gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
          <div className="max-w-32.5 flex flex-col items-center">
            <AvatarPic author='سارا' size='1' />
            <span className="mt-1.5 font-semibold">سارا احمدی</span>
            <span className="bg-green-100 text-green-700 rounded-lg text-xs font-semibold px-2 py-1 mt-1.5">فارغ التحصیل</span>
            <div className="text-gray-500 flex flex-col text-center text-xs mt-1.5 gap-y-0.5">
              <span>دانشگاه تهران</span>
              <span>۲۳۴ پست</span>
              <span>عضو از ۱۴۰۱</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-line text-right">
              {`ممنون از راهنمای خوبت علی جان 🙏
              
              یه نکته هم من اضافه می‌کنم: حتماً به ساعات کلاسی دقت کنید. بعضی وقت‌ها دو تا درس که می‌خواید بردارید با هم تداخل دارن.
              
              همچنین توصیه می‌کنم اگه می‌خواید درسی رو با دوستاتون بردارید، حتماً قبلش هماهنگ کنید تا همه یه استاد و یه کلاس رو انتخاب کنید.`}
            </p>

            <div className="w-full border-t border-black/15 mt-6"></div>

            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#arrow-top"></use>
                  </svg>
                  <span>۴۵</span>
                </div>
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#reply"></use>
                  </svg>
                  <span>پاسخ</span>
                </div>
                <div className="hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
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

            <span className="text-gray-500 text-sm tracking-rtl-tighter mt-4 inline-block">۲ ساعت پیش</span>
          </div>
        </div>
        <div className="flex items-start gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
          <div className="max-w-32.5 flex flex-col items-center">
            <AvatarPic author='تست' size='1' />
            <span className="mt-1.5 font-semibold">علی محمدی</span>
            <span className="bg-sky-100 text-sky-700 rounded-lg text-xs font-semibold px-2 py-1 mt-1.5">دانشجوی کارشناسی</span>
            <div className="text-gray-500 flex flex-col text-center text-xs mt-1.5 gap-y-0.5">
              <span>دانشگاه تهران</span>
              <span>۲۳۴ پست</span>
              <span>عضو از ۱۴۰۱</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-line text-right">
              {`سلام، یه سوال داشتم 🤔
              
              من ترم ۴ هستم و می‌خوام درس سیستم‌عامل رو بردارم. نمی‌دونم استاد دکتر احمدی بهتره یا دکتر حسینی؟
              
              کسی با هر دوتاشون درس داشته که بتونه کمک کنه؟`}
            </p>

            <div className="w-full border-t border-black/15 mt-6"></div>

            <div className="flex items-center justify-between mt-6 text-sm">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#arrow-top"></use>
                  </svg>
                  <span>۴۵</span>
                </div>
                <div className="flex items-center gap-x-1 font-semibold hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
                  <svg className="w-4.5 h-4.5">
                    <use href="#reply"></use>
                  </svg>
                  <span>پاسخ</span>
                </div>
                <div className="hover:bg-sky-100 px-2 py-2 rounded-lg transition duration-200">
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

            <span className="text-gray-500 text-sm tracking-rtl-tighter mt-4 inline-block">۲ ساعت پیش</span>
          </div>
        </div>
        <div className="border border-black/15 py-6 px-9 rounded-lg bg-white">
          <span className="inline-block font-semibold">پاسخ خود را بنویسید</span>

          <textarea className="w-full border mt-3 bg-black/5 border-black/15 rounded-lg min-h-40 p-4" name="" id="" placeholder="پاسخ خود را بنویسید..."></textarea>

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