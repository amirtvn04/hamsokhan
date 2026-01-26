import Button from './elements/Button.jsx'
import InputField from './elements/InputField.jsx'
import { supabase } from "../lib/supabase.js"
import { useState } from 'react'
import AsiedeAuth from './AsiedeAuth.jsx'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [studentId, setStudentId] = useState("")
    const [fullName, setFullName] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();

        setLoading(true)
        setError(null)

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        }

        await supabase.from("profiles").insert({
            id: data.user.id,
            email,
            student_id: studentId,
            full_name: fullName
        })

        setLoading(false)
        alert("ثبت‌نام موفق بود، ایمیل را بررسی کنید")
    }

    return (
        <div className='flex items-center min-h-dvh'>
            <main className='flex-1 flex flex-col justify-between bg-white min-h-dvh px-5 pt-16 pb-8 shadow-lg border-black/30 border-l'>
                <form onSubmit={handleRegister} className='w-82.25 sm:w-[384px] flex flex-1 flex-col justify-center items-center mx-auto'>
                    <div className='bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-[24px] text-white'>
                        هـ
                    </div>

                    <h3 className='mt-7'>به جمع هم‌سخن ها بپیوندید!</h3>
                    <p className='text-gray-500 mt-1 mb-12 tracking-tight text-center'>در هم‌سخن می‌توانید سؤال بپرسید، تجربه‌هایتان را به اشتراک بگذارید و با دانشجویان و فارغ‌التحصیلان گفتگو کنید.</p>

                    <div className='space-y-3.5 w-full mb-7'>
                        <InputField value={fullName} onChange={(e) => setFullName(e.target.value)} icon='person' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='نام مستعار' />
                        <InputField value={studentId} onChange={(e) => setStudentId(e.target.value)} icon='id' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='شماره دانشجویی' />
                        <InputField value={email} onChange={(e) => setEmail(e.target.value)} icon='mail' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='ایمیل' />
                        <InputField value={password} onChange={(e) => setPassword(e.target.value)} icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='رمز عبور' />
                        {/* <InputField value={} onChange={() => } icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='تکرار رمز عبور' /> */}
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <Button value={loading ? "در حال ثبت‌نام..." : "ثبت‌نام"} type='submit' disabled={loading} />

                </form>
                <p className='text-sm mt-7 text-gray-500 tracking-tight text-center'>با ادامه، <a className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>قوانین و سیاست حریم خصوصی هم‌سخن </a>
                    را می‌پذیرید.
                </p>
            </main>

            <AsiedeAuth />
        </div>
    )
}

export default Register