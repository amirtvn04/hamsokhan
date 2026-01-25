import Button from '../elements/Button'
import InputField from '../elements/InputField'
import { supabase } from "../../lib/supabase"
import { useState } from 'react'
import AsiedeAuth from './AsiedeAuth'

function Login({ gotoRegister }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) setError(error.message)
    }

    return (
        <div className='flex items-center h-dvh'>
            <main className='flex-1 flex flex-col justify-between bg-white h-full px-5 pt-16 pb-8'>
                <form onSubmit={handleLogin} className='w-82.25 sm:w-[384px] flex flex-1 flex-col justify-center items-center mx-auto'>
                    <div className='bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-[24px] text-white'>
                        هـ
                    </div>

                    <h3 className='mt-7'>به هم‌سخن خوش آمدید!</h3>
                    <p className='text-gray-500 mt-1 mb-12 tracking-tight'>برای دسترسی به تالارهای گفتگو وارد حساب کاربری خود شوید</p>

                    <div className='space-y-3.5 w-full'>
                        <InputField value={email} onChange={(e) => setEmail(e.target.value)} icon='person' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='ایمیل یا شماره دانشجویی' />
                        <InputField value={password} onChange={(e) => setPassword(e.target.value)} icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='رمز عبور' />
                    </div>

                    <a className='text-[#0065F4] font-bold self-start mr-3 mt-3.5 underline mb-7 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93] tracking-tight'>فراموشی رمز عبور؟</a>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <Button value='ورود' type='submit' />

                    <p className='mt-7 text-gray-500 tracking-tight'>حساب کاربری ندارید؟ <a onClick={() => gotoRegister()} className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>ثبت‌نام</a></p>
                </form>
                <p className='text-sm mt-7 text-gray-500 tracking-tight text-center'>با ادامه، <a className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>قوانین و سیاست حریم خصوصی هم‌سخن </a>
                    را می‌پذیرید.
                </p>
            </main>

            <AsiedeAuth />
        </div>
    )
}

export default Login