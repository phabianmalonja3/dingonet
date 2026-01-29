import Home from "@/components/shared/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dingonet - Bridging the Digital Divide in Tanzania",
  description: "Dingonet is a non-profit organization dedicated to providing affordable internet access and digital skills to underserved communities across Tanzania.",
};

export default function HomePage() {
  return <Home  />;
}
