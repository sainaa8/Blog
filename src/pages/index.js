import { FirstPage } from "@/components/FirstPage";
import { SecondPage } from "@/components/SecondPage";
import { AllBlog } from "@/components/ThirdPage";
import useSWR from "swr";
export default function Home() {
  const { data, error } = useSWR("https://dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );

  return (
    <div className="flex flex-col gap-[100px]">
      <FirstPage data={data} />
      <SecondPage data={data} />
      <AllBlog data={data} />
    </div>
  );
}
