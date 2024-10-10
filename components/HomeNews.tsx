import Image from "next/image";
import icon from "../public/icon.png";

export default function HomeNews({
  date,
  title,
}: {
  date: string;
  title: string;
}) {
  return (
    <div className="flex x-full hover:cursor-pointer float-right homeNewsHover ">
      <Image src={icon} alt="icon" className="w-2/5 h-full  mr-32" />
      <div className="mt-5 w-full">
        <p className="mt-5 w-full">{date}</p>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
