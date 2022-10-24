import Link from "next/link";
import { useState } from 'react'
/* eslint-disable react/no-unescaped-entities */
export default function SignUpForm(){
    const [signUpInfo, setSignUpInfo] = useState({
        email: null,
        fullName: null,
        userName: null,
        password: null,
        repeatPass: null
    })

    function handleSignUp(credentials){
        const { email, fullName, userName, password, repeatPass } = credentials
        console.log(`will SignUp with email ${email}, fullName ${fullName}, userName: ${userName}, password: ${password}, repeatPass: ${repeatPass}`)
    }


    return (
        <div className="flex flex-col p-16 items-center border-gray-200 border-2 m-4 justify-center w-96">
            <h1 className="font-cursive">NextaGram</h1>
            <input name="email" className="w-full border-grey-200 border-2 mt-2 p-2" id="email" type="text" placeholder="Email" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="fullName" className="w-full border-grey-200 border-2 mt-2 p-2" id="fullName" type="text" placeholder="Full Name" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="userName" className="w-full border-grey-200 border-2 mt-2 p-2" id="userName" type="text" placeholder="Username" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="password" className="w-full border-grey-200 border-2 mt-2 p-2" id="password" type="password" placeholder="Password" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="repeatPass" className="w-full border-grey-200 border-2 mt-2 p-2" id="repeatPass" type="password" placeholder="Re-type Password" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <div onClick={()=>handleSignUp(signUpInfo)} className="w-full mt-2 pointer-events-auto rounded-md bg-sky-400 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:cursor-pointer flex items-center justify-center" >Sign Up</div>
        </div>
    )
}