import Link from "next/link";
import LogoutForm from "./logoutForm"
import { gestSession } from "@/actions";

const Navbar = async () => {
    const session = await gestSession()

    console.log(session)
    return <nav className="login">
        <Link href="/">Homepage</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
       {session.isLoggedIn && <LogoutForm />}
    </nav>;
  };
  
  export default Navbar 

 
