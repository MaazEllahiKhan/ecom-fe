'use client'
import ADMIN_LOGIN from "@/app/components/shared/apollo/graphql/auth/auth.graphql"
import { useLazyQuery } from "@apollo/client"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export const useLoginHoc = () => {
    // const [validationError, setValidationError] = useState('')
    const [useLoginQuery, { data, error }] = useLazyQuery(ADMIN_LOGIN)

    const onSubmit = (e: any) => {
        useLoginQuery({
            variables: {
                email: e.get('email'),
                password: e.get('password')
            }
        })
    }
    useEffect(() => {
        if (data && data?.adminLogin) {
            localStorage.setItem('token', data?.adminLogin.access_token);
            redirect('/dashboard')
        }
    }, [data])
    return {
        onSubmit,
        validationError: error?.message
    }


}