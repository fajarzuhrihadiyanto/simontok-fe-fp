import {MainView} from "../components/Main";
import {LoginForm} from "../components/Login/Form";
import { useRouter } from "next/router";
import React from "react";

export default function Login () {

    const router = useRouter()

    React.useEffect(() => {
      const token = localStorage && localStorage.getItem('token')
      if (token) {
        router.push('/dashboard')
      }
    }, [])
    return (
        <>
            <MainView>
                <LoginForm />
            </MainView>
        </>
    )
}
