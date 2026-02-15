import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/15 mt-12">
            <div className="container-uni">
                <div className="grid sm:grid-cols-5 gap-8 pt-8 pb-9 border-b border-black/15">
                    <div className="col-span-2">
                        <Link className="flex items-center gap-x-2">
                            <div to="/" className='bg-primary w-9 h-9 rounded-lg flex items-center justify-center text-[20px] text-white'>
                                هـ
                            </div>
                            <span className="text-lg font-bold">یونی‌گپ</span>
                        </Link>
                        <p className="text-gray-500 tracking-tight mt-2.5 leading-8">
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                        </p>
                    </div>
                    <div>
                        <span className="font-bold ">درباره‌ ما</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link className="hover:text-gray-900">معرفی پلتفرم</Link></li>
                            <li><Link className="hover:text-gray-900">تماس با ما</Link></li>
                            <li><Link className="hover:text-gray-900">فرصت‌های شغلی</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold ">راهنما</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link className="hover:text-gray-900">قوانین و مقررات</Link></li>
                            <li><Link className="hover:text-gray-900">راهنمای استفاده</Link></li>
                            <li><Link className="hover:text-gray-900">سوالات متداول</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold ">پشتیبانی</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link className="hover:text-gray-900">گزارش مشکل</Link></li>
                            <li><Link className="hover:text-gray-900">حریم خصوصی</Link></li>
                            <li><Link className="hover:text-gray-900">امنیت</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-500 text-xs my-4 text-center">© ۱۴۰۴ یونی‌گپ. تمامی حقوق محفوظ است - توسعه دهنده:امیر توانا</p>
            </div>
        </footer>
    )
}
