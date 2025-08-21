import Image from "next/image";
import News from "./sections/news";

export default function Home() {
  return (
    <div className="px-6">
      <News />
    </div>
  );
}