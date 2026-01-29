import Button from './elements/Button'
import InputField from './elements/InputField'
import { supabase } from "../lib/supabase"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function LoginInputs() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSignIn = async (e) => {
        e.preventDefault();

        setLoading(true)
        setError(null)
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        console.log({ data })
        if (error) setError(error.message)
        else alert("ورود موفق! خوش آمدید.")
        setLoading(false)
    }

    return (
        <form onSubmit={handleSignIn} className='w-82.25 sm:w-[384px] flex flex-1 flex-col justify-center items-center mx-auto'>
            <Link to="/" className='bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-[24px] text-white'>
                هـ
            </Link>

            <h3 className='mt-7'>به هم‌سخن خوش آمدید!</h3>
            <p className='text-gray-500 mt-1 mb-12 tracking-tighter [word-spacing:-3px]'>برای دسترسی به تالارهای گفتگو وارد حساب کاربری خود شوید</p>

            <div className='space-y-3.5 w-full'>
                <InputField value={email} onChange={(e) => setEmail(e.target.value)} icon='person' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='ایمیل یا شماره دانشجویی' />
                <InputField value={password} onChange={(e) => setPassword(e.target.value)} icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='رمز عبور' />
            </div>

            <Link className='text-[#0065F4] font-bold self-start mr-3 mt-3.5 underline mb-7 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93] tracking-tight'>فراموشی رمز عبور؟</Link>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <Button value={loading ? "لطفا صبر کنید..." : "ورود"} type='submit' disabled={loading} />

            <p className='mt-7 text-gray-500 tracking-tight'>حساب کاربری ندارید؟ <Link to="../register" className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>ثبت‌نام</Link></p>
        </form>
    )
}

export default LoginInputs