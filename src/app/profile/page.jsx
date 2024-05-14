import { gestSession, changeUsename, changePremium } from "@/actions";
import { redirect } from "next/navigation";

const ProfilePage = async () => {

const session = await gestSession();


if(!session.isLoggedIn){
  redirect("/")
}

  return <div className="profile">
    <h1>Welcome to profile page</h1>
    <p>Welcome, <b>{session.username}</b>
    </p>
    <span>You are <b>{session.isPro ? "Premium": "Free"}</b>User</span>
    <form action={changePremium}>
      <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
    </form>
    <form action={changeUsename}>
      <input type="text" name="username" required placeholder={session.userName}/>
      <button>Update</button>
    </form>
  </div>;
};

export default ProfilePage;