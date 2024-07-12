import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Main  from "./components/Main";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
    <div className="flex h-screen min-w-96 flex-col gap-20 bg-zinc-50 dark:bg-black dark:text-white">
      <Header />
      <div className="flex">
      <Sidebar />
      <Main />
      
      </div>
      
      <Footer />    
     
    </div>
    
  );
}
