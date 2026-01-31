import AvatarPic from "../components/AvatarPic"
import Header from "../components/Header"


function LiveChat() {
  return (
    <>
      <Header />
      <div className="pt-18.5 container-uni min-h-100 h-screen overflow-hidden flex flex-col">
        <main className="flex flex-1 gap-x-3 pb-3 overflow-hidden">
          <aside className="border border-black/15 rounded-lg bg-white w-65 flex flex-col overflow-hidden">
            <div className="px-4 pt-3 flex items-center justify-between">
              <h5 className="font-semibold">کانال ها</h5>
              <div className="hover:bg-blue-50 rounded-lg p-0.5 transition duration-150">
                <svg className="w-5 h-5">
                  <use href="#plus"></use>
                </svg>
              </div>
            </div>
            <div className="px-4 py-3 border-b border-black/15">
              <div className="relative group text-sm">
                <svg className="absolute top-1/2 transform -translate-y-1/2 right-3 w-6 h-6 text-gray-500 pointer-events-none group-focus-within:text-black">
                  <use href='#search'></use>
                </svg>

                <input type='text' placeholder="جستجو..." className='input_field pr-9.5 w-full pl-3 py-2.5 border border-black/15 rounded-xl hover:border-[#0065F4] focus:outline-[#0065F4] focus:border-[#0065F4] focus:outline-2 transition-all bg-[#fafafa]' />
              </div >
            </div>

            {/* chanel list */}
            <div className="py-3 px-2 space-y-2 flex-1 overflow-y-auto scrollbar-chat">
              <div className="flex items-end justify-between p-2 rounded-lg group hover:bg-sky-100 transition duration-150">
                <div className="flex items-start gap-x-1 group-hover:text-blue-700 transition duration-150">
                  <svg className="w-4 h-4">
                    <use href="#hashtag"></use>
                  </svg>
                  <div>
                    <h5 className="text-sm">گفت‌و‌گوی عمومی</h5>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">چت عمومی همه دانشجویان</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4">
                    <use href="#people"></use>
                  </svg>
                  ۶۵
                </div>
              </div>
              <div className="flex items-end justify-between p-2 rounded-lg group hover:bg-sky-100 transition duration-150">
                <div className="flex items-start gap-x-1 group-hover:text-blue-700 transition duration-150">
                  <svg className="w-4 h-4">
                    <use href="#hashtag"></use>
                  </svg>
                  <div>
                    <h5 className="text-sm">گفت‌و‌گوی عمومی</h5>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">چت عمومی همه دانشجویان</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4">
                    <use href="#people"></use>
                  </svg>
                  ۶۵
                </div>
              </div>
              <div className="flex items-end justify-between p-2 rounded-lg bg-sky-100 transition duration-150">
                <div className="flex items-start gap-x-1 text-blue-700 transition duration-150">
                  <svg className="w-4 h-4">
                    <use href="#hashtag"></use>
                  </svg>
                  <div>
                    <h5 className="text-sm">گفت‌و‌گوی عمومی</h5>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">چت عمومی همه دانشجویان</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4">
                    <use href="#people"></use>
                  </svg>
                  ۶۵
                </div>
              </div>
              <div className="flex items-end justify-between p-2 rounded-lg group hover:bg-sky-100 transition duration-150">
                <div className="flex items-start gap-x-1 group-hover:text-blue-700 transition duration-150">
                  <svg className="w-4 h-4">
                    <use href="#hashtag"></use>
                  </svg>
                  <div>
                    <h5 className="text-sm">گفت‌و‌گوی عمومی</h5>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">چت عمومی همه دانشجویان دانشگاه </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4">
                    <use href="#people"></use>
                  </svg>
                  ۶۵
                </div>
              </div>
            </div>
          </aside>

          <section className="border border-black/15 rounded-lg bg-white flex-1 flex flex-col overflow-hidden">
            <div className="flex-none px-4 py-3 border-b border-black/15">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg className="w-5 h-5 text-blue-700">
                    <use href="#hashtag"></use>
                  </svg>
                  <div>
                    <h5 className="font-semibold">گفت‌و‌گوی عمومی</h5>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1">چت عمومی همه دانشجویان</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-8">
                  <div className="flex items-center gap-x-1 text-gray-500 text-sm">
                    <svg className="w-4.5 h-4.5">
                      <use href="#people"></use>
                    </svg>
                    ۲۴۵ نفر آنلاین
                  </div>
                  <div>
                    <div className="hover:bg-blue-50 rounded-lg p-0.5 transition duration-150">
                      <svg className="w-5 h-5 rotate-90">
                        <use href="#more"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flx flex-col items-end justify-end gap-y-6 flex-1 overflow-y-auto scrollbar-chat p-4 space-y-6">
              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='تست' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">علی محمدی</h5>
                    <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">سلام بچه‌ها! کسی برای انتخاب واحد ترم بهار سوال داره؟</p>
                </div>
              </div>

              <div className="text-left">
                <div className="px-4 py-2 bg-primary rounded-lg text-white text-sm inline-block">
                  <p>سلام سارا جان! بله، من یه سوال داشتم درباره درس ساختمان داده</p>
                </div>
                <span className="text-gray-500 text-xs mt-1 block">۱۰:۳۲</span>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='محم' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">محمد رضایی</h5>
                    <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">من هم سوال داشتم 🙋‍</p>
                </div>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='سارا' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">سارا احمدی</h5>
                    <span className="bg-green-100 inline-block text-green-700 rounded-lg text-xs font-semibold px-2 py-0.5">فارغ التحصیل</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">بپرسید حتماً کمک می‌کنم</p>
                </div>
              </div>

              <div className="text-left">
                <div className="px-4 py-2 bg-primary rounded-lg text-white text-sm inline-block">
                  <p>استاد دکتر احمدی رو توصیه می‌کنید یا دکتر حسینی؟</p>
                </div>
                <span className="text-gray-500 text-xs mt-1 block">۱۰:۳۲</span>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='سارا' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">سارا احمدی</h5>
                    <span className="bg-green-100 inline-block text-green-700 rounded-lg text-xs font-semibold px-2 py-0.5">فارغ التحصیل</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3 whitespace-pre-line">
                    {`من با هر دو استاد درس داشتم. دکتر احمدی بیشتر تئوری تدریس می‌کنن
                       ولی دکتر حسینی عملی‌تر هستن`}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mx-auto">سارا احمدی به گروه پیوست</p>
              
              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='تست' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">علی محمدی</h5>
                    <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">سلام بچه‌ها! کسی برای انتخاب واحد ترم بهار سوال داره؟</p>
                </div>
              </div>

              <div className="text-left">
                <div className="px-4 py-2 bg-primary rounded-lg text-white text-sm inline-block">
                  <p>سلام سارا جان! بله، من یه سوال داشتم درباره درس ساختمان داده</p>
                </div>
                <span className="text-gray-500 text-xs block mt-1">۱۰:۳۲</span>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='محم' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">محمد رضایی</h5>
                    <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">من هم سوال داشتم 🙋‍</p>
                </div>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='سارا' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">سارا احمدی</h5>
                    <span className="bg-green-100 inline-block text-green-700 rounded-lg text-xs font-semibold px-2 py-0.5">فارغ التحصیل</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3">بپرسید حتماً کمک می‌کنم</p>
                </div>
              </div>

              <div className="text-left">
                <div className="px-4 py-2 bg-primary rounded-lg text-white text-sm inline-block">
                  <p>استاد دکتر احمدی رو توصیه می‌کنید یا دکتر حسینی؟</p>
                </div>
                <span className="text-gray-500 text-xs block mt-1">۱۰:۳۲</span>
              </div>

              <div className="flex items-start gap-x-3 w-full">
                <AvatarPic size='0' author='سارا' />
                <div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="text-sm font-semibold">سارا احمدی</h5>
                    <span className="bg-green-100 inline-block text-green-700 rounded-lg text-xs font-semibold px-2 py-0.5">فارغ التحصیل</span>
                    <span className="text-gray-500 text-xs">۱۰:۳۲</span>
                  </div>
                  <p className="mt-2 text-sm mr-3 whitespace-pre-line">
                    {`من با هر دو استاد درس داشتم. دکتر احمدی بیشتر تئوری تدریس می‌کنن
                       ولی دکتر حسینی عملی‌تر هستن`}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mx-auto">سارا احمدی به گروه پیوست</p>


            </div>

            <div className="border-t border-black/15 px-4 py-3">
              <div className="relative group w-full">
                <svg className="absolute top-1/2 transform -translate-y-1/2 right-12 w-6 h-6 text-gray-500 pointer-events-none group-focus-within:text-black">
                  <use href="#paper-clip"></use>
                </svg>
                <svg className="absolute top-1/2 transform -translate-y-1/2 right-4 w-6 h-6 text-gray-500 pointer-events-none group-focus-within:text-black">
                  <use href="#emoji"></use>
                </svg>
                <div className="flex gap-x-2">
                  <input type="text" placeholder="پیام خود را بنویسید..." className="flex-1 tracking-rtl-tight input_field py-2.5 pl-4 pr-19 w-full border border-black/15 rounded-lg hover:border-[#0065F4] focus:outline-[#0065F4] focus:border-[#0065F4] focus:outline-2 transition-all bg-[#fafafa]" />
                  <button className="bg-primary w-11.5 flex items-center justify-center rounded-lg">
                    <svg className="w-6 h-6">
                      <use href="#send"></use>
                    </svg>
                  </button>
                </div>
              </div >
              <p className="text-xs text-gray-500 mt-2">Enter برای ارسال، Shift+Enter برای خط جدید</p>
            </div>
          </section>

          <aside className="border border-black/15 rounded-lg bg-white w-65 flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-black/15">
              <h5 className="font-semibold">کاربران آنلاین </h5>
              <p className="text-gray-500 mt-1 text-sm">۸ نفر</p>
            </div>

            <div className="p-4 space-y-5 flex-1 overflow-y-auto scrollbar-chat">

              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <AvatarPic author='تست' size='0' />
                  <div className="size-4 bg-green-600 border-3 border-white rounded-full absolute -bottom-0.5 -left-0.5"></div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold">علی محمدی</h5>
                  <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <AvatarPic author='تست' size='0' />
                  <div className="size-4 bg-green-600 border-3 border-white rounded-full absolute -bottom-0.5 -left-0.5"></div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold">علی محمدی</h5>
                  <span className="bg-blue-100 inline-block text-blue-700 rounded-lg text-xs font-semibold px-2 py-0.5">دانشجوی کارشناسی</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <AvatarPic author='تست' size='0' />
                  <div className="size-4 bg-green-600 border-3 border-white rounded-full absolute -bottom-0.5 -left-0.5"></div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold">علی توانا</h5>
                  <span className="bg-purple-100 inline-block text-purple-700 rounded-lg text-xs font-semibold px-2 py-0.5">مدیر</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <AvatarPic author='تست' size='0' />
                  <div className="size-4 bg-green-600 border-3 border-white rounded-full absolute -bottom-0.5 -left-0.5"></div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold">امیر توانا</h5>
                  <span className="bg-green-100 inline-block text-green-700 rounded-lg text-xs font-semibold px-2 py-0.5">فارغ التحصیل</span>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default LiveChat