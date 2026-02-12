import Button from './elements/Button'
import InputField from './elements/InputField'
import { useLogin } from '../features/auth/useLogin'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../features/auth/useAuth'

function LoginInputs() {
    const {refreshUser} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, loading, error } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await login(email, password)

        if (success) {
            await refreshUser()
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-82.25 sm:w-[384px] flex flex-1 flex-col justify-center items-center mx-auto'>
            <Link to="/" className='bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-[24px] text-white'>
                هـ
            </Link>

            <h3 className='mt-7'>به هم‌سخن خوش آمدید!</h3>
            <p className='text-gray-500 mt-2 mb-12 tracking-rtl-tighter leading-7'>برای دسترسی به تالارهای گفتگو وارد حساب کاربری خود شوید</p>

            <div className='space-y-3.5 w-full'>
                <InputField value={email} onChange={(e) => setEmail(e.target.value)} icon='person' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='ایمیل یا شماره دانشجویی' />
                <InputField value={password} onChange={(e) => setPassword(e.target.value)} icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='رمز عبور' />
            </div>

            <Link className='text-[#0065F4] font-bold self-start mr-3 mt-3.5 underline underline-offset-2 mb-7 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>فراموشی رمز عبور؟</Link>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <Button value={loading ? "لطفا صبر کنید..." : "ورود"} type='submit' disabled={loading} />

            <p className='mt-7 text-gray-500'>حساب کاربری ندارید؟ <Link to="../register" className='text-[#0065F4] font-bold underline underline-offset-2 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>ثبت‌نام</Link></p>
        </form>
    )
}

export default LoginInputs