export default function Service({ title }: { title: string }) {
  return (
    <div
      className="h-96 w-full mx-3 flex items-center justify-center bg-black rounded-2xl
         hover:bg-gray-600 hover:cursor-pointer "
    >
      <div className="">
        <p className="text-3xl text-white">{title}</p>
      </div>
    </div>
  );
}
