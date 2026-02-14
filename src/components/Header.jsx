import clsx from "clsx";
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../features/auth/useAuth";
import AvatarPic from "./AvatarPic";
import Skeleton from "./skeleton/Skeleton";

export default function Header() {
    const { user, profile, loading, logout } = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const prevScrollPos = useRef(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            const threshold = 10;

            if (
                prevScrollPos.current - currentScrollPos > threshold ||
                currentScrollPos < 200
            ) {
                setVisible(true);
            } else if (
                currentScrollPos - prevScrollPos.current > threshold
            ) {
                setVisible(false);
            }

            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={clsx('bg-white textsm border-b border-black/15 w-full fixed top-0 right-0 transition-all duration-300', !visible && 'transform -translate-y-20')}>
                <div className="container-uni flex justify-between items-center py-3">
                    <button onClick={() => setIsOpen(true)} className="sm:hidden border border-black/15 rounded-sm p-1.5">
                        <svg className="w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-black">
                            <use href='#bars-3'></use>
                        </svg>
                    </button>

                    <div className="flex items-center gap-x-12">

                        <Link className="flex items-center gap-x-2">
                            <div to="/" className='bg-primary size-8 sm:size-9 rounded-lg flex items-center justify-center text-xl sm:text-[22px] text-white'>
                                یـ
                            </div>
                            <span className="text-xl font-semibold">یونی‌گپ</span>
                        </Link>
                        <nav className="hidden sm:flex items-center gap-x-6 font-semibold">
                            <NavLink className="hover:text-[#0065F4] transition duration-150" to='/'>خانه</NavLink>
                            <NavLink className="hover:text-[#0065F4] transition duration-150" to='/categories'>دسته‌بندی‌ها</NavLink>
                            <NavLink className="hover:text-[#0065F4] transition duration-150" to='/forums'>انجمن‌ها</NavLink>
                            <NavLink className="hover:text-[#0065F4] transition duration-150" to='/chat'>گفتگوی زنده</NavLink>
                        </nav>
                    </div>
                    <div className="flex items-center gap-x-3 font-semibold">
                        <button className="sm:hidden border border-black/15 rounded-sm p-1.5">
                            <svg className="w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-black">
                                <use href='#search'></use>
                            </svg>
                        </button>

                        <div className="relative group w-full hidden sm:inline-block">
                            <svg className="absolute top-1/2 transform -translate-y-1/2 right-3 w-5 h-5 text-gray-500 pointer-events-none group-focus-within:text-black">
                                <use href='#search'></use>
                            </svg>

                            <input type='text' placeholder="جستجو در بین تاپیک‌ها" className='text-sm py-2 pr-9 w-64 input_field tracking-rtl-tight border border-black/15 rounded-xl hover:border-[#0065F4] focus:outline-[#0065F4] focus:border-[#0065F4] focus:outline-2 transition-all' />
                        </div>

                        <div className="hidden sm:flex items-center gap-x-3">
                            {loading ? (
                                <Skeleton className='size-9.5 rounded-full shrink-0' />
                            ) : user ? (
                                <AvatarPic author={profile?.full_name} size="0" />
                            ) : (
                                <>
                                    <Link to="/login" className="flex items-center gap-x-1 hover:bg-black/5 rounded-lg px-7 py-1.5 border border-[rgba(0,0,0,0)] hover:border-black/15 transition-colors">
                                        <svg className="w-6 h-6">
                                            <use href="#door-in"></use>
                                        </svg>
                                        <span>ورود</span>
                                    </Link>
                                    <Link to="/register" className="px-7 py-1.5 rounded-lg bg-primary text-white hover:shadow-[0_2px_20px_rgba(0,101,244,0.4)] transition-all">
                                        ثبت‌نام
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </header>

            <div
                onClick={() => setIsOpen(false)}
                className={clsx(
                    "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 sm:hidden",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            />

            <aside className={clsx("fixed top-0 right-0 h-full w-72 bg-white z-50 pt-14 transform transition-transform duration-300 sm:hidden shadow-xl", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="p-5 space-y-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="float-left"
                    >
                        <svg className="w-5 h-5">
                            <use href="#x-mark"></use>
                        </svg>
                    </button>

                    <nav className="flex flex-col gap-y-4 font-semibold text-base">
                        <NavLink onClick={() => setIsOpen(false)} to="/">خانه</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to="/categories">دسته‌بندی‌ها</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to="/forums">انجمن‌ها</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to="/chat">گفتگوی زنده</NavLink>
                    </nav>

                    <div className="border-t border-black/15"></div>

                    {!user && (
                        <div className="flex flex-col gap-y-3 font-semibold">
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="/login"
                                className="text-center py-2 border border-black/15 rounded-lg"
                            >
                                ورود
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="/register"
                                className="text-center py-2 bg-primary text-white rounded-lg"
                            >
                                ثبت‌نام
                            </Link>
                        </div>
                    )}

                </div>
            </aside>
        </>
    )
}
