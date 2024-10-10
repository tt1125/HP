import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeNews from "@/components/HomeNews";
import Service from "@/components/Service";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="x-screnn h-screen  flex flex-col justify-center items-center">
        <p className="text-7xl ">AI × 産業</p>
        <p className="text-7xl m-10 ">日本を「AI」の国に</p>
      </div>
      <div className="x-screnn ">
        <div className="ml-36 h-screen w-3/5 flex flex-col justify-center ">
          <p className="text-7xl">Vision</p>
          <p className="text-4xl my-16">
            各産業へのテクノロジーの実装を通じて、
            <br />
            国としてのモメンタムを取り戻す。
          </p>
          <div>
            <p className="text-1xl">
              〇〇は "日本を AI の国に" をミッションとするAIカンパニーです。
            </p>
            <p className="text-1xl">
              各産業へのAI技術の実装を通じて日本の競争力を引き上げ、国としてのモメンタムを取り戻します。
            </p>
          </div>
        </div>
      </div>

      <div className="x-screnn ">
        <div className="ml-36 h-screen w-3/5 flex flex-col justify-center ">
          <p className="text-7xl">Mission</p>
          <p className="text-4xl my-16">
            テクノロジーで、ビジネス・産業を、変革する。
          </p>
          <div>
            <p className="text-1xl">
              私たちは、ビジネスへのAI実装を推進する専門家集団です。
            </p>
            <br />
            <p className="text-1xl">
              20・30代を中心とした若く馬力のあるメンバー構成で、少数精鋭集団としての強みを生かし、「誰よりも早く、誰よりも柔軟に」数多くの企業のAI活用を支援しています。
            </p>
            <p className="text-1xl">
              1人単位でのAI人材のご提供から。予算に適した費用間でのPoC推進・受託開発まで、お客様にあった支援スキームをきめ細かく設計し、AIプロジェクトの成功を実現します。
            </p>
          </div>
        </div>
      </div>
      <div className="x-full my-32">
        <div className="w-3/5  ml-36 ">
          <p className="text-7xl mr-6">Service</p>
          <p className="text-2xl my-8">ー 事業紹介 ー</p>
        </div>
        <div className="h-3/5 flex items-center justify-center w-full service">
          <div className=" w-full h-full flex items-center justify-around my-20 ">
            <Service title={"AIソリューション事業"} />
            <Service title={"AI・DXコンサルティング事業"} />
          </div>
        </div>
      </div>
      <div className="x-full bg-black ">
        <div className=" ml-36 w-3/5 py-4">
          <p className="text-7xl text-white mt-6">Project</p>
          <p className="text-2xl my-8 text-white">ー 事例紹介 ー</p>
        </div>
      </div>
      <div className="project bg-black flex flex-col justify-center items-center">
        <div className="project__view bg-gray-400"></div>
      </div>
      <div className="flex display-contents">
        <div className="ml-36 mt-20 ">
          <div className="">
            <p className="text-7xl mt-6">News</p>
            <p className="text-2xl my-8 w-full">ー 新着情報 ー</p>
          </div>
          <Link href="/news">
            <div className="w-56 mt-16 rounded-full bg-black h-16 flex items-center justify-center">
              <p className="text-white ">Newを見る</p>
            </div>
          </Link>
        </div>
        <div className="news">
          <HomeNews
            date={"2024年1月26日 11時25分"}
            title="ホームページを作りました！"
          />
          <HomeNews
            date={"2024年1月26日 11時25分"}
            title="ホームページを作りました！"
          />
          <HomeNews
            date={"2024年1月26日 11時25分"}
            title="ホームページを作りました！"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
