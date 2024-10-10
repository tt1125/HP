import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";

export default function businnes() {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="">
      <Header />
      <div className=" flex justify-center">
        <div className="w-2/3">
          <p className="py-32 text-6xl">Business</p>
        </div>
      </div>
      <div className="w-full h-screen ">
        <div className="w-full h-1/2 flex justify-center">
          <div className="w-2/5 h-full p-12">
            <div className="h-full w-full bg-black"></div>
          </div>
          <div className="w-1/3 h-full flex flex-col justify-center items-center">
            <p className="text-5xl mb-5">AIソリューション事業</p>
            <p className="">
              多数のプロジェクトを成功させてきたコンサルタントをアサインし、
            </p>
            <p className="">
              AI・DX戦略の立案から実行推進まで泥臭く伴走します。
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-center">
          <div className="w-1/3 h-full flex flex-col justify-center items-center">
            <p className="text-5xl mb-5">AI・DXコンサルティング事業</p>
            <p className="">
              1人単位でのAI人材のアサインから、予算に適した費用感でのPoC推進、
            </p>
            <p className="">
              AIシステムやアプリケーションの受託開発まで、AIシステムやアプリケーションの受託開発まで、
            </p>
            <p className="">泥臭く伴走し、プロジェクトの成功を実現します。</p>
          </div>
          <div className="w-2/5 h-full p-12">
            <div className="h-full w-full bg-black"></div>
          </div>
        </div>
      </div>
      <p className="ml-72 mt-32 text-3xl">事例</p>
      <div className=" h-auto flex justify-center mb-32">
        <div className="w-2/5  flex flex-wrap">
          {array.map((num) => (
            <div className="w-1/2 hoverLine hover:cursor-pointer">
              <Project
                title={`事例${num}を提供開始しました！`}
                client={`クライアント${num}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
