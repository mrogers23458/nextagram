import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../utils/mutations/mutations'
import { useRouter } from 'next/router'
/* eslint-disable react/no-unescaped-entities */
export default function SignUpForm(){
    const router = useRouter()
    const [signUpInfo, setSignUpInfo] = useState({
        email: null,
        fullName: null,
        userName: null,
        password: null,
        repeatPass: null
    })

    const [createUser, {error, loading, data}] = useMutation(CREATE_USER);

    error && (console.error(error))
    data && (router.push(`/users/${data.createUser.userName}`))

    async function handleSignUp(credentials){
        const { email, fullName, userName, password, repeatPass } = credentials
        console.log(`will SignUp with email ${email}, fullName ${fullName}, userName: ${userName}, password: ${password}, repeatPass: ${repeatPass}`)
        const { data } = await createUser({
            variables: {
                fullName,
                userName,
                email,
                password
            }
        })
    }


    return (
        <div className="flex flex-col p-16 items-center border-gray-200 border-2 m-4 justify-center w-96">
            {loading && (
                <div>
                    I will be a loading icon
                </div>
            )}
            <h1 className="font-cursive">NextaGram</h1>
            <input name="email" className="w-full border-grey-200 border-2 mt-2 p-2" id="email" type="email" placeholder="Email" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="fullName" className="w-full border-grey-200 border-2 mt-2 p-2" id="fullName" type="text" placeholder="Full Name" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="userName" className="w-full border-grey-200 border-2 mt-2 p-2" id="userName" type="text" placeholder="Username" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="password" className="w-full border-grey-200 border-2 mt-2 p-2" id="password" type="password" placeholder="Password" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <input name="repeatPass" className="w-full border-grey-200 border-2 mt-2 p-2" id="repeatPass" type="password" placeholder="Re-type Password" onChange={(e) => setSignUpInfo({...signUpInfo, [e.target.name]:e.target.value})} />
            <div onClick={()=>handleSignUp(signUpInfo)} className="w-full mt-2 pointer-events-auto rounded-md bg-sky-400 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:cursor-pointer flex items-center justify-center" >Sign Up</div>
        </div>
    )
}