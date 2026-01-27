import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-white border-b border-black/15">
            <div className="container mx-auto px-4 lg:px-2.5 flex justify-between items-center py-3">
                <div className="flex items-center gap-x-14">
                    <Link className="flex items-center gap-x-2">
                        <div to="/" className='bg-primary w-10 h-10 rounded-lg flex items-center justify-center text-[24px] text-white'>
                            هـ
                        </div>
                        <span className="text-xl font-bold">هم‌سخن</span>
                    </Link>
                    <nav className="flex items-center gap-x-6 font-bold">
                        <NavLink to='/'>خانه</NavLink>
                        <NavLink to='/forums'>انجمن‌ها</NavLink>
                        <NavLink to='/category'>دسته‌بندی‌ها</NavLink>
                        <NavLink to='/chat'>گفتگوی زنده</NavLink>
                    </nav>
                </div>
                <div className="flex items-center gap-x-3 font-bold ">
                    <Link to="/login" className="flex items-center gap-x-1 hover:bg-black/5 rounded-lg px-7 py-1.5 transition-colors">
                        <svg className="w-6 h-6">
                            <use href="#door-in"></use>
                        </svg>
                        <span>ورود</span>
                    </Link>
                    <Link to="/register" className="px-7 py-1.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] focus:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all">
                        ثبت‌نام
                    </Link>
                </div>
            </div>
        </header>
    )
}
