import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Mainpage } from "./components/Mainpage";
import { Dashboardnav } from "./components/Dashboardnav";

export default function App() {
  return (
    <div className="flex h-screen min-w-96 flex-col gap-20 bg-zinc-50 dark:bg-black dark:text-white">
      <Header />
      <Dashboardnav />

      <Mainpage />
      <Footer />
    </div>
  );
}
