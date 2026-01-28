import React from 'react'
import LoginInputs from '../components/LoginInputs'

function Login() {
  return (
    <main className='flex-1 flex flex-col justify-between bg-white min-h-dvh px-5 pt-16 pb-8 shadow-lg border-black/15 border-l rounded-l-4xl'>

      <LoginInputs />

      <p className='text-sm mt-7 text-gray-500 tracking-tight text-center'>با ادامه، <a className='text-[#0065F4] font-bold underline cursor-pointer focus:outline-none focus:text-[#003d93] hover:text-[#003d93]'>قوانین و سیاست حریم خصوصی هم‌سخن </a>
        را می‌پذیرید.
      </p>
    </main>
  )
}

export default Login