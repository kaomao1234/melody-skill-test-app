import Image from "next/image";
import Home from "./home";

export default function App() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between w-full`}
    >
      <Home />
    </main>
  );
}
