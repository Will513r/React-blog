import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Mainpage } from "./components/Mainpage";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-900">
      <div className="m-auto flex h-screen min-w-96 max-w-7xl flex-col bg-zinc-50 dark:bg-black dark:text-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <Mainpage />
        </div>
        <Footer />
      </div>
    </div>
  );
}
