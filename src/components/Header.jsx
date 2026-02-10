import clsx from "clsx";
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAuth } from "../features/auth/useAuth";

export default function Header() {
    const { user, loading } = useAuth();
    console.log(user)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={clsx('bg-white border-b border-black/15 w-full fixed top-0 right-0 transition-all duration-300', !visible && 'transform -translate-y-20')}>
            <div className="container-uni flex justify-between items-center py-3">
                <div className="flex items-center gap-x-12">
                    <Link className="flex items-center gap-x-2">
                        <div to="/" className='bg-primary w-9 h-9 rounded-lg flex items-center justify-center text-[22px] text-white'>
                            هـ
                        </div>
                        <span className="text-xl font-semibold">هم‌سخن</span>
                    </Link>
                    <nav className="flex items-center gap-x-6 font-semibold">
                        <NavLink className="hover:text-[#0065F4] transition duration-150" to='/'>خانه</NavLink>
                        <NavLink className="hover:text-[#0065F4] transition duration-150" to='/categories'>دسته‌بندی‌ها</NavLink>
                        <NavLink className="hover:text-[#0065F4] transition duration-150" to='/forums'>انجمن‌ها</NavLink>
                        <NavLink className="hover:text-[#0065F4] transition duration-150" to='/chat'>گفتگوی زنده</NavLink>
                    </nav>
                </div>
                <div className="flex items-center gap-x-3 font-semibold">
                    <Link to="/login" className="flex items-center gap-x-1 hover:bg-black/5 rounded-lg px-7 py-1.5 border border-[rgba(0,0,0,0)] hover:border-black/15 transition-colors">
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
