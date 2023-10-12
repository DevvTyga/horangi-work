import Image from "next/image";

export default function Profile() {
  return (
    <div className="bg-white w-full rounded-2xl shadow">
      <div className="flex justify-center items-center aspect-w-1 aspect-h-1 bg-orange-200 rounded-tl-2xl rounded-tr-2xl">
        <Image
          className="w-full h-full object-contain"
          src="/profile.png"
          alt=""
          width={200}
          height={37}
          unoptimized={true}
        />
      </div>
      <div className="px-4 py-3 flex flex-col space-y-1 text-center text-zinc-800 text-lg font-bold">
        <div>타이가</div>
        <div className="font-medium text-xs text-gray-400">
          <span>Twitter </span>
          <a href="https://twitter.com/DevvTyga">@DevvTyga</a>
        </div>
      </div>
    </div>
  );
}
