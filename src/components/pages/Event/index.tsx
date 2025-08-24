import { useParams, Navigate, Link } from "react-router";
import { events } from "../../../data";
import bkimg from "../../../img/background.png";
import EventDetail from "../../atoms/EventDetail";

const Event = () => {
  const { year } = useParams<{ year: string }>();

  // 該当するイベントを検索
  const event = events.find((e) => e.year.toString() === year);

  // 存在しない場合はrootにリダイレクト
  if (!event) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      {/* 背景画像 */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bkimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2 // 背景をうっすら表示
        }}
      />
      {/* グローバルヘッダー */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-blue-800 hover:text-blue-900 transition"
          >
            NPS Softball Events
          </Link>
        </div>
      </header>
      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-7xl w-1/2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 mb-10">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            {event.title}
          </h1>
          <EventDetail event={event} />
        </div>
        {/* 戻るボタン */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-100 text-blue-700 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-300 active:shadow-lg transition duration-150 ease-in-out"
          >
            戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
