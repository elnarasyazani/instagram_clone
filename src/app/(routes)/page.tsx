import { auth, signIn, signOut } from "../../auth"


export default async function Home() {
  const session = await auth();
  return (
   <div className="">
    {session && (
      <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="bg-ig-red p-2 m-4 rounded-lg"><img src={session.user?.image} />{session.user?.name} Sign Out</button>
    </form>
    )}

    {!session && (
      <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit" className="bg-ig-orange p-2 rounded-lg">Sign In</button>
    </form>
    )}
   </div>
  );
}
