import HomeIndex from "@/components/Home/HomeIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anuario Etche",
  description: "Anuario Etche",
  // other metadata
};

export default function Home() {
  return (
    <>
      <HomeIndex />
    </>
  );
}
