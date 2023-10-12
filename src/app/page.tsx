import MySeriesList from "@/components/my-series-list";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-6 py-12 min-h-screen bg-white space-y-10">
      <Profile />
      <Description />
      <MySeriesList />
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-zinc-600 text-xs font-medium">
        덕질에 유용한 프로젝트들을 만들고 있습니다.
      </span>
    </div>
  );
}
