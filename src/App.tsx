import EventTimeline from "./components/EventTimeline";
import bkimg from "./img/background.png";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative overflow-hidden">
      {/* 横幅フルのSVG背景 */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] z-0"
        style={{ minWidth: "100vw", minHeight: 400 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ pointerEvents: "none" }}
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="curve-clip">
              <path d="M0,100 Q400,200 900,80 T1440,180 L1440,0 L0,0 Z" />
            </clipPath>
          </defs>
          <image
            href={bkimg}
            width="1440"
            height="400"
            clipPath="url(#curve-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
          <path
            d="M0,100 Q400,200 900,80 T1440,180 L1440,0 L0,0 Z"
            fill="#93c5fd"
            opacity="0.25"
          />
          <path
            d="M0,200 Q600,350 1440,120 L1440,0 L0,0 Z"
            fill="#60a5fa"
            opacity="0.18"
          />
        </svg>
      </div>
      {/* タイトルをSVGの明るい内側に絶対配置（ブロック背景なし） */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-10 pointer-events-none">
        <span className="inline-block px-4 py-1 bg-blue-700/90 text-white text-xs font-bold rounded-full tracking-widest shadow-md mb-2 drop-shadow-lg">
          NPS杯
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 drop-shadow-lg">
          ソフトボール大会
        </h1>
        <p className="text-lg mt-2 text-blue-900 drop-shadow">
          企業交流を深めるスポーツイベント
        </p>
      </div>
      <main className="px-4 md:px-8 lg:px-16 relative z-20 pt-[260px]">
        <EventTimeline />
      </main>
      <footer className="text-center text-sm text-gray-500 py-6 relative z-20">
        &copy; 2025 Softball Event Committee
      </footer>
    </div>
  );
};

export default App;
