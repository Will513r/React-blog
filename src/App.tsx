import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Mainpage } from "./components/Mainpage";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen min-w-96 flex-col bg-zinc-50 dark:bg-black dark:text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <Mainpage />
      </div>
      <Footer />
    </div>
  );
}
