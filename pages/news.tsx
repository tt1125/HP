import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News from "@/components/News";
export default function news() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-2/3">
          <p className="text-6xl pt-64">News</p>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center pb-32">
        <div className="w-2/3 flex items-center flex-wrap">
          {array.map((num) => (
            <div className="w-1/3 hoverLine hover:cursor-pointer">
              <News
                title={`ニュース${num}を公開しました！`}
                date={"2024年01月26日"}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
