import Button from './elements/Button'
import InputField from './elements/InputField'

function Register() {
    return (
        <div className='flex items-center gap-x-10 h-dvh'>
            <div className='w-1/2'>
                <form className='max-w-100 flex flex-col justify-center items-center mx-auto'>
                    <div className='bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-[24px] text-white'>
                        هـ
                    </div>

                    <h3 className='mt-7'>به جمع هم‌سخن ها بپیوندید!</h3>
                    <p className='text-gray-500 mt-1 mb-12 tracking-tight text-center'>در هم‌سخن می‌توانید سؤال بپرسید، تجربه‌هایتان را به اشتراک بگذارید و با دانشجویان و فارغ‌التحصیلان دانشگاه‌های ایران گفتگو کنید.</p>

                    <div className='space-y-3.5 w-full mb-7'>
                        <InputField icon='person' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='نام مستعار' />
                        <InputField icon='id' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='شماره دانشجویی' />
                        <InputField icon='mail' type='text' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='ایمیل' />
                        <InputField icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='رمز عبور' />
                        <InputField icon='key' type='password' CustomStyles='w-full pr-12 pl-5 py-4' placeholder='تکرار رمز عبور' />
                    </div>

                    <Button value='ثبت‌نام' />

                    <p className='text-lg mt-7 text-gray-500 tracking-tight'>با ثبت‌نام در هم‌سخن، <a className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>قوانین و حریم خصوصی </a> 
                     
                    را می‌پذیرید.
                    </p>
                </form>
            </div>
            <div className='w-1/2'>
                hi
            </div>
        </div>
    )
}

export default Register