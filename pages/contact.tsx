import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function contact() {
  return (
    <div>
      <Header />
      <div className=" flex justify-center">
        <div className="w-2/3">
          <p className="pt-32 text-6xl">Contact</p>
          <p className="text-2xl mt-6 mb-32">お問い合わせ</p>
          <div className="w-full h-screen flex justify-center">
            <div className="w-2/3 h-5/6">
              <form className="h-full border border-black flex flex-col items-center">
                <p className="text-2xl mt-6">弊社へのお問い合わせは</p>
                <p className="text-2xl mt-1">
                  こちらのフォームより承っております。
                </p>
                <p className="mt-3">
                  ご返信に1営業日ほどお時間をいただいております。
                </p>
                <div className="w-1/2 mt-10">
                  <p>お名前</p>
                  <input
                    className="w-full p-2 border border-gray-300"
                    type="text"
                  />
                </div>
                <div className="w-1/2 mt-6">
                  <p>会社名</p>
                  <input
                    className="w-full p-2 border border-gray-300"
                    type="text"
                  />
                </div>

                <div className="w-1/2 mt-6">
                  <p>メールアドレス</p>
                  <input
                    className="w-full p-2 border border-gray-300"
                    type="text"
                  />
                </div>
                <div className="w-1/2 h-1/5 mt-6">
                  <p>お問い合わせ内容</p>
                  <textarea className="w-full h-full resize-none border border-gray-300"></textarea>
                </div>
                <div className="mt-16">
                  <input type="checkbox" className="mr-3" />
                  <span>プライバシーポリシーに同意して送信する</span>
                </div>
                <button
                  type="submit"
                  className="mt-6 bg-black text-white py-4 px-16 rounded-full"
                >
                  送信
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
