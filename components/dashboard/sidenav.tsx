import { auth, signOut } from "@/auth";
import LinkItem from "./linkitem";
import { links } from "@/data/constants";

const SideNav = async () => {
  const name = await auth().then((session) => session?.user.name);
  return (
    <div className="h-full border-r p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl text-slate-800 font-bold">{name}</h1>
        <hr className="w-full my-3" />
        <ul>
          {links.map((link) => (
            <LinkItem key={link.name} name={link.name} href={link.href} />
          ))}
        </ul>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="w-full text-white rounded-md p-2 bg-red-400 hover:bg-red-500 transition-all duration-200"
        >
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SideNav;
