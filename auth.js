import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";

const config = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        Resend({
            apiKey: process.env.RESEND_KEY,
            from: "noreply@resend.primecholce.store"
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);