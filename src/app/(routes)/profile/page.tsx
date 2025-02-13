import { auth } from "@/auth";
import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/db";


export default async function ProfilePage() {
  const session = await auth();
  const profile = await prisma.profile.
findFirstOrThrow({
  where: {email: session?.user?.email as string}
})

  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2 font-bold">
         {profile?.username}
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16}/>
          </div>
        </div>
        <Link href={'/settings'}>
          <CogIcon />
        </Link>
      </section>

      <section className="mt-8 flex justify-center">
        <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
          <div className="size-44 p-2 bg-white rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p className="text-gray-500 mt-1 mb-1">{profile.subtitle}</p>
        <p>
          {profile.bio}
        </p>
      </section>

      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={""}>Posts</Link>
          <Link className="text-gray-400" href={"/highlights"}>HighLights</Link>
        </div>
      </section>

      <section className="mt-4">
        <PostsGrid />
      </section>
    </main>

  );
}