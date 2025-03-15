"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

const dashboardUrl = "/dashboard";


const ButtonLogin = ({ session, extraStyle }) => {
    if (session) {
        return (
            <Link href={dashboardUrl} className={`btn btn-primary border border-gray-300 shadow-md px-6 py-3 ${extraStyle ? extraStyle : ""}`}>
                Bem-vindo de volta {session.user.name || "Friend"}
            </Link>
        );
    }

    return (<button className={`btn btn-primary border border-gray-300 shadow-md px-6 py-3 ${extraStyle ? extraStyle : ""}`}
        onClick={() => {
            signIn(undefined, { callbackUrl: dashboardUrl });
        }}
    
    >
        
        Get Started
    
    </button>)
};

export default ButtonLogin;
