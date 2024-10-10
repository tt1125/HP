import Image from "next/image";
import icon from "../public/icon.png";

export default function News({ date, title }: { date: string; title: string }) {
  return (
    <div className=" h-auto flex flex-col">
      <Image src={icon} alt="" className="h-84 w-auto" />
      <div className="ml-16">
        <p className="text-3xl mb-8">{title}</p>
        <p>プレリリース {date}</p>
      </div>
    </div>
  );
}
