import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="flex h-screen min-w-96 flex-col gap-20 bg-zinc-50 dark:bg-black dark:text-white">
      <Header />
    </div>
  );
}
