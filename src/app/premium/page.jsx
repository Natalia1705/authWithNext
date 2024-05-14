import { gestSession } from "@/actions";
import { redirect } from "next/navigation";
import Link from "next/link";


const PremiumPage = async () => {

  const session = await gestSession();

 if(!session.isLoggedIn){
redirect("/")
 }

 if(!session.isPro){
return(
<div className="notPremium">
<h1>Only premium users can see the content!</h1>
<Link href="/profile">Go to the profile page</Link>
</div>)
}

  return <div className="premium">
    <h1>Welcome to Premium page</h1>
  </div>;
};

export default PremiumPage;