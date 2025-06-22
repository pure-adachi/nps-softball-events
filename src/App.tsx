import { useState } from "react";
import backgroundImage from "./img/background.png";

const events = [
  {
    id: "2025",
    title: "NPS ソフトボール大会 2025",
    date: "未定",
    place: "未定",
    fee: "未定",
    target: "どなたでも参加OK！",
    items: "未定",
    description: "2025年度の大会情報は決まり次第お知らせします。"
  },
  {
    id: "2024",
    title: "NPS ソフトボール大会 2024",
    date: "2024年8月24日（土）10:00〜17:00",
    place: "大阪市 万博記念公園 ソフトボール場",
    fee: "無料",
    target: "どなたでも参加OK！",
    items: "運動できる服装・飲み物",
    description:
      "2024年度大会は大盛況のうちに終了しました！ご参加ありがとうございました。<br/>優勝：チームA<br/>準優勝：チームB<br/>来年もご期待ください。"
  }
];

const Header = () => (
  <header className="w-full py-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100 text-white text-center shadow-2xl">
    <h1
      className="text-6xl font-black mb-2 tracking-widest uppercase drop-shadow-2xl"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      NPS ソフトボール大会
    </h1>
    <p className="text-2xl font-semibold drop-shadow-lg">
      毎年開催！みんなで楽しむソフトボールイベント
    </p>
  </header>
);

const EventList = ({
  onSelect,
  selectedId
}: {
  onSelect: (id: string) => void;
  selectedId: string;
}) => (
  <nav className="w-full bg-white shadow mb-6">
    <ul className="flex justify-center space-x-6 py-4">
      {events.map((event) => (
        <li key={event.id}>
          <button
            className={`font-bold px-4 py-2 rounded ${
              selectedId === event.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-blue-700 hover:bg-blue-100"
            } transition`}
            onClick={() => onSelect(event.id)}
          >
            {event.title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

const Features = () => (
  <section className="max-w-3xl mx-auto my-10 grid md:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <span className="text-4xl mb-2">🎉</span>
      <h3 className="font-bold text-lg mb-1 text-blue-600">誰でも参加OK</h3>
      <p className="text-gray-700 text-center">初心者・経験者問わず大歓迎！</p>
    </div>
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <span className="text-4xl mb-2">🤝</span>
      <h3 className="font-bold text-lg mb-1 text-green-600">
        交流＆チームワーク
      </h3>
      <p className="text-gray-700 text-center">
        みんなで楽しくプレーして交流を深めよう！
      </p>
    </div>
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <span className="text-4xl mb-2">🥎</span>
      <h3 className="font-bold text-lg mb-1 text-yellow-600">
        ソフトボール大会
      </h3>
      <p className="text-gray-700 text-center">
        白熱の試合やレクリエーションも実施！
      </p>
    </div>
  </section>
);

const EventInfo = ({ event }: { event: (typeof events)[0] }) => (
  <section className="max-w-xl mx-auto my-8 bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-4 text-blue-700">
      {event.title} 概要
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>
        <strong>日程：</strong>
        {event.date}
      </li>
      <li>
        <strong>場所：</strong>
        {event.place}
      </li>
      <li>
        <strong>参加費：</strong>
        {event.fee}
      </li>
      <li>
        <strong>対象：</strong>
        {event.target}
      </li>
      <li>
        <strong>持ち物：</strong>
        {event.items}
      </li>
    </ul>
    <p
      className="mt-4 text-gray-800"
      dangerouslySetInnerHTML={{ __html: event.description }}
    />
  </section>
);

const Footer = () => (
  <footer className="w-full py-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100 text-center text-white mt-8">
    &copy; 2024 NPS Softball Event
  </footer>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(events[0].id);
  const selectedEvent = events.find((e) => e.id === selectedId)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 flex flex-col relative overflow-hidden">
      {/* 丸いグラデーション背景 */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-200 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-[200px] right-[-120px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-[-120px] left-[30%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[100px] right-[10%] w-[250px] h-[250px] bg-blue-400 rounded-full blur-2xl opacity-50"></div>
      </div>
      {/* 背景画像 */}
      <img
        src={backgroundImage}
        alt="ソフトボールを楽しむ人々"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <EventList onSelect={setSelectedId} selectedId={selectedId} />
        <main className="flex-1 flex flex-col items-center justify-center">
          <Features />
          <EventInfo event={selectedEvent} />
          {selectedId === "2025" && (
            <div className="mt-8 text-center">
              <span className="inline-block px-8 py-3 bg-blue-200 text-blue-900 font-bold rounded-full shadow">
                参加申し込みは準備中です
              </span>
            </div>
          )}
          {selectedId === "2024" && (
            <div className="mt-8 text-center">
              <span className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow">
                2024年度大会は終了しました
              </span>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
