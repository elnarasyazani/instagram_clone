import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2 font-bold">
          my_name_is_Sendy
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16}/>
          </div>
        </div>
        <button>
          <CogIcon />
        </button>
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
        <h1 className="text-xl font-bold">Sendi Gunawan</h1>
        <p className="text-gray-500 mt-1 mb-1">Business account</p>
        <p>
          Entrepreneur, Husband, Father <br />
          Contact : gunawansendi@yahoo.com
        </p>
      </section>

      <section>

      </section>
    </main>

  );
}