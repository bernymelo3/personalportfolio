import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import ProfilePage from "@/components/main/ProfilePage";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <ProfilePage />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}