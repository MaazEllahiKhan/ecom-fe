'use client'

import { useLoginHoc } from "./login-hoc";

export default function Login() {
    const { onSubmit, validationError } = useLoginHoc();

    return (
        // <div className="w-full flex justify-center align-middle bg-[#eee7e4]">
        //     <div className="box-border h-32 w-32 p-4 border-4 ...">
        <div className="box w-[100%] space-y-32">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl md:text-4xl font-bold font-radley text-gray-800 text-center mb-4">
                    <span className="text-primary capitalized">Login</span>  <span className="italic capitalized">page</span>
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <form className="flex flex-col space-y-4 text-center" action={onSubmit}>
                    <input className="p-2 border-2 border-primary rounded-md" type="email" name="email" placeholder="Email" required />
                    <input className="p-2 border-2 border-primary rounded-md" type="password" name="password" placeholder="Password" required />
                    {validationError && <p className="text-red-600">{validationError}</p>}

                <button className="bg-primary text-white p-2 rounded-md" type="submit">Login</button>
            </form>
        </div>


        </div >


        // </div>
    );
}