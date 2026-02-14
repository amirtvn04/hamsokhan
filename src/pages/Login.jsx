import LoginInputs from '../components/LoginInputs'

function Login() {
  return (
    <main className='flex-1 flex flex-col justify-between bg-white min-h-dvh px-5 pt-16 pb-8 shadow-lg border-black/15 sm:border-l sm:rounded-l-4xl'>

      <LoginInputs />

      <p className='text-xs sm:text-sm mt-7 text-gray-500 text-center'>با ادامه، <a className='text-[#0065F4] font-bold underline underline-offset-2 cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>قوانین و سیاست حریم خصوصی یونی‌گپ </a>
        را می‌پذیرید.
      </p>
    </main>
  )
}

export default Login