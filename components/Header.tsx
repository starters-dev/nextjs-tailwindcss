import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col md:flex-row mx-auto mb-2 items-center text-center hover:cursor-pointer"
      onClick={() => router.push("/")}
    >
      <div className="p-2 rounded-xl bg-primary">
        <span className="text-2xl font-coolvetica text-black">
          NextJS + TailwindCSS
        </span>
      </div>

      <span className="ml-0 md:ml-2 md:inline-block text-2xl font-coolvetica text-black">
        Starter
      </span>
    </div>
  );
};
