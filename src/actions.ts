"use server";
   
import { getIronSession } from "iron-session"
import { sessionOptions,SessionData, defaultSession } from "./lib"
import {cookies} from "next/headers"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

let username = "covita";
let isPro = true;
let isBlocked = true;

export const gestSession = async () =>{
    const session = await getIronSession<SessionData>(cookies(),sessionOptions);
    
    if(!session.isLoggedIn){
       session.isLoggedIn = defaultSession.isLoggedIn
    }

    //CHECK THE USER IN THE DB

    session.isBlocked = isBlocked;
    session.isPro = isPro;

    return session; 

} 
export const login = async (prevState:{error:undefined | string}, formData:FormData) =>{
    const session = await gestSession()
    const formUsername = formData.get("username") as string
    const formPassword = formData.get("password") as string

    //CHECK IS USER IS IN DB

   // const user = await db.getUser(username, password)

   if(formUsername !== username){
    return{error:"Wrong credentials"}
   }

   session.userId="1"
   session.userName= formUsername
   session.isPro = isPro
   session.isLoggedIn = true

   await session.save()
   redirect("/")
} 
export const logout  = async () =>{
    const session = await gestSession(); 
    session.destroy()
    redirect("/") 
} 

export const changePremium = async () =>{

    const session = await gestSession(); 
    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/Profile")
}
export const changeUsename = async (formData: FormData) =>{
    const session = await gestSession(); 
    const newUsername = formData.get("username") as string

    username = newUsername;

    session.userName = username;
    await session.save();
    revalidatePath("/Profile");
}