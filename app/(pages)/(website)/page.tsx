import type { Metadata } from "next";
import { HomePage } from "./../../components/home/homePage";

export default function IndexPage() {
    return <HomePage />;
}

export const metadata: Metadata = {
    title: "Redux Toolkit",
  };
  