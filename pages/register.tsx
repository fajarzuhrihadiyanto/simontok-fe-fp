import {RegisterForm} from "../components/Register/Form";
import {MainView} from "../components/Main";
import { useRouter } from "next/router";
import React from "react";

export default function Register() {

    const router = useRouter()

    React.useEffect(() => {
      const token = localStorage && localStorage.getItem('token')
      if (!token) {
        router.push('/login')
      }
    }, [])
    return (
        <>
            <MainView>
                <RegisterForm />
            </MainView>
        </>
    )
}
