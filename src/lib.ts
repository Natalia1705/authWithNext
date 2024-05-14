import { SessionOptions } from "iron-session"

export interface SessionData {
 userId?:string;
 userName?:string;
 img?:string;
 isPro?:boolean;
 isBlocked?: true;
 isLoggedIn:boolean;
}

export const defaultSession: SessionData = {
    isLoggedIn:false
} 

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!, 
    cookieName: "cookie-session",
    cookieOptions:{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production" 
    }
}