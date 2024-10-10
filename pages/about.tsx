import Header from "@/components/Header";
import Image from "next/image";
import icon from "../public/icon.png";

export default function about() {
  return (
    <div>
      <Header />
      <div className="w-full pt-32 h-screen">
        <div className="w-3/5  ml-36 ">
          <p className="text-7xl">About</p>
          <p className="text-2xl my-8">ー 会社案内 ー</p>
        </div>
        <div className="w-full h-3/4 bg-black"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-start">
        <div className="member flex justify-center items-start ">
          <div className="w-1/4 p-5 ">
            <Image alt="" src={icon} className="w-full h-auto" />
            <div className="items-center ">
              <p className="text-2xl">山田太郎</p>
              <p className="text-gray-600">代表取締役 CEO</p>
              <br />
              <p>〇〇大学商学部卒業</p>

              <p className="break-words">
                国内の有名大学でロボティクスを専攻後、AIと自動化技術に興味を持ち、卒業後にAIシステムの開発を行う企業でエンジニアとして働き始め、そこでの業績が評価されると共に、さらなる成長を目指して海外の著名な大学院に留学し、AI技術とビジネスアドミニストレーションの両分野で学位を取得、帰国後にAIとロボティクスを融合したスタートアップ「〇〇〇〇」を創業し、製造業の効率化を実現するAI搭載型ロボットや自動化ソリューションを次々と発表、わずか8年で国内外の市場で存在感を示し、特に自動運転技術やスマートシティソリューション、医療用ロボット開発で成功を収め、企業の国際展開を果たした現在、〇〇〇〇の代表取締役社長兼CEOとして技術革新をリードしつつ、AI倫理や持続可能な開発に取り組み、次世代のリーダー育成にも力を入れている。
              </p>
            </div>
          </div>
          <div className="w-1/4 p-5 ">
            <Image alt="" src={icon} className="w-full h-auto" />
            <div className="items-center ">
              <p className="text-2xl">山田次郎</p>
              <p className="text-gray-600">取締役 COO</p>
              <br />
              <p>〇〇大学経済学部卒業</p>
              国内の有名大学でロボティクスを専攻後、AIと自動化技術に興味を持ち、卒業後にAIシステムの開発を行う企業でエンジニアとして働き始め、そこでの業績が評価されると共に、さらなる成長を目指して海外の著名な大学院に留学し、AI技術とビジネスアドミニストレーションの両分野で学位を取得、帰国後にAIとロボティクスを融合したスタートアップ「〇〇〇〇」を創業し、製造業の効率化を実現するAI搭載型ロボットや自動化ソリューションを次々と発表、わずか8年で国内外の市場で存在感を示し、特に自動運転技術やスマートシティソリューション、医療用ロボット開発で成功を収め、企業の国際展開を果たした現在、〇〇〇〇の代表取締役社長兼COOとして技術革新をリードしつつ、AI倫理や持続可能な開発に取り組み、次世代のリーダー育成にも力を入れている。
              <p className="break-words"></p>
            </div>
          </div>
          <div className="w-1/4 p-5 ">
            <Image alt="" src={icon} className="w-full h-auto" />
            <div className="items-center ">
              <p className="text-2xl">山田三郎</p>
              <p className="text-gray-600">最高技術責任者 CTO</p>
              <br />
              <p>〇〇大学理工学部卒業</p>

              <p className="break-words ">
                国内の有名大学でロボティクスを専攻後、AIと自動化技術に興味を持ち、卒業後にAIシステムの開発を行う企業でエンジニアとして働き始め、そこでの業績が評価されると共に、さらなる成長を目指して海外の著名な大学院に留学し、AI技術とビジネスアドミニストレーションの両分野で学位を取得、帰国後にAIとロボティクスを融合したスタートアップ「〇〇〇〇」を創業し、製造業の効率化を実現するAI搭載型ロボットや自動化ソリューションを次々と発表、わずか8年で国内外の市場で存在感を示し、特に自動運転技術やスマートシティソリューション、医療用ロボット開発で成功を収め、企業の国際展開を果たした現在、〇〇〇〇の代表取締役社長兼CTOとして技術革新をリードしつつ、AI倫理や持続可能な開発に取り組み、次世代のリーダー育成にも力を入れている。
              </p>
            </div>
          </div>
          <div className="w-1/4 p-5 ">
            <Image alt="" src={icon} className="w-full h-auto" />
            <div className="items-center ">
              <p className="text-2xl">山田四郎</p>
              <p className="text-gray-600">技術責任者</p>
              <br />
              <p>〇〇大学理学部物理学科卒業</p>

              <p className="break-words ">
                国内の有名大学でロボティクスを専攻後、AIと自動化技術に興味を持ち、卒業後にAIシステムの開発を行う企業でエンジニアとして働き始め、そこでの業績が評価されると共に、さらなる成長を目指して海外の著名な大学院に留学し、AI技術とビジネスアドミニストレーションの両分野で学位を取得、帰国後にAIとロボティクスを融合したスタートアップ「〇〇〇〇」を創業し、製造業の効率化を実現するAI搭載型ロボットや自動化ソリューションを次々と発表、わずか8年で国内外の市場で存在感を示し、特に自動運転技術やスマートシティソリューション、医療用ロボット開発で成功を収め、企業の国際展開を果たした現在、〇〇〇〇の技術責任者として技術革新をリードしつつ、AI倫理や持続可能な開発に取り組み、次世代のリーダー育成にも力を入れている。
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <p className="pt-32 text-3xl pb-16">会社概要</p>
        </div>
        <div className="w-1/2 text-1xl flex flex-col items-center justify-center mb-32">
          <div className="w-full flex py-6 border-t border-b border-gray-500">
            <p className="w-1/3 ml-20">会社名</p>
            <p>株式会社〇〇</p>
          </div>
          <div className="w-full flex py-6 border-b border-gray-500">
            <p className="w-1/3 ml-20">登記</p>
            <p>
              〒104-0061
              <br />
              東京都中央区銀座5丁目10-1
            </p>
          </div>
          <div className="w-full flex py-6 border-b border-gray-500">
            <p className="w-1/3 ml-20">オフィス</p>
            <p>
              〒150-0001
              <br />
              東京都渋谷区神宮前4丁目3-2
            </p>
          </div>
          <div className="w-full flex py-6 border-b border-gray-500">
            <p className="w-1/3 ml-20">事業内容</p>
            <p>
              AI開発
              <br />
              システム開発
              <br />
              アプリケーション開発
              <br />
              SES
              <br />
              DXコンサルティング
            </p>
          </div>
          <div className="w-full flex py-6 border-b border-gray-500">
            <p className="w-1/3 ml-20">代表取締役</p>
            <p>山田太郎</p>
          </div>
          <div className="w-full flex py-6 border-b border-gray-500">
            <p className="w-1/3 ml-20">顧問弁護士</p>
            <p>山田花子法律事務所</p>
          </div>
        </div>
      </div>
    </div>
  );
}
