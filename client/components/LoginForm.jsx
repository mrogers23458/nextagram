import Link from "next/link";
import { useState } from 'react'
/* eslint-disable react/no-unescaped-entities */
export default function LoginForm(){
    const [loginInfo, setLoginInfo] = useState({
        userInfo: null,
        password: null
    })

    function handleLogin(credentials){
        const { userInfo, password } = credentials
        console.log(`will login with userInfo ${userInfo} and password ${password}`)
    }

    return (
        <div className="flex flex-col p-16 items-center border-gray-200 border-2 m-4 h-96">
            <h1 className="font-cursive">NextaGram</h1>
            <input name="userInfo" className="w-full border-grey-200 border-2 mt-2 p-2" id="userInfo" type="text" placeholder="Username or Email" onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} />
            <input name="password" className="w-full border-grey-200 border-2 mt-2 p-2" id="password" type="password" placeholder="Password" onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} />
            <div onClick={()=>handleLogin(loginInfo)} className="w-full mt-2 pointer-events-auto rounded-md bg-sky-400 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:cursor-pointer" >Log in</div>
            <div>
                <p>Don't have an account? <span><Link href="/signup">Sign up</Link></span></p>
            </div>
        </div>
    )
}