import "@/styles/globals.css";
import { Work_Sans, Source_Serif_4 } from "@next/font/google";
import { Header } from "@/components/Header";
//innstens
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const serif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: ["--font-serif"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable} ${serif4.variable}`}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </main>
  );
}
