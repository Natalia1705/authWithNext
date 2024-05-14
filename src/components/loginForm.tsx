"use client"

import { login } from "@/actions";
import { useFormState }from "react-dom"

const LoginForm = () => {
    
    const [state, formAction] = useFormState<any, FormData>(login, undefined)

    return(
      <form action={formAction}>
        <input type="text" name="username" required placeholder="username"></input>
        <input type="ássword" name="password" required placeholder="password"></input>
        <button>LogiIn</button>
        {state?.error && <p>{state.error}</p>}
      </form>
    )
  };
  
  export default LoginForm 