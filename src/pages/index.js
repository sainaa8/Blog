import { FirstPage } from "@/components/First-page";
import { SecondPage } from "@/components/Seconf_page";
export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <FirstPage />
      <SecondPage />
    </div>
  );
}
