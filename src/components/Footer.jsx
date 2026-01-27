import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/15">
            <div className="container mx-auto px-4 lg:px-2.5">
                <div className="grid grid-cols-5 gap-8 pt-8 pb-9 border-b border-black/15">
                    <div className="col-span-2">
                        <Link className="flex items-center gap-x-2">
                            <div to="/" className='bg-primary w-10 h-10 rounded-lg flex items-center justify-center text-[24px] text-white'>
                                هـ
                            </div>
                            <span className="text-lg font-bold">هم‌سخن</span>
                        </Link>
                        <p className="text-gray-500 tracking-tight mt-2.5">
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                            تالار گفتگوی دانشجویی برای به اشتراک‌گذاری
                            دانش و تجربیات
                        </p>
                    </div>
                    <div>
                        <span className="font-bold text-lg">درباره‌ ما</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link>معرفی پلتفرم</Link></li>
                            <li><Link>تماس با ما</Link></li>
                            <li><Link>فرصت‌های شغلی</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold text-lg">راهنما</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link>قوانین و مقررات</Link></li>
                            <li><Link>راهنمای استفاده</Link></li>
                            <li><Link>سوالات متداول</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold text-lg">پشتیبانی</span>
                        <ul className="text-gray-500 tracking-tight text-sm leading-8 mt-2.5">
                            <li><Link>گزارش مشکل</Link></li>
                            <li><Link>حریم خصوصی</Link></li>
                            <li><Link>امنیت</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-500 text-sm my-4 text-center">© ۱۴۰۴ هم‌سخن. تمامی حقوق محفوظ است.</p>
            </div>
        </footer>
    )
}
