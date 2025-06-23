import bkimg from "./img/background.png";
import { useEffect, useRef } from "react";

const events = [
  {
    year: 2025,
    title: "NPS CUP 2025",
    status: "計画中",
    description: "詳細は近日発表予定です。"
  },
  {
    year: 2024,
    title: "NPS CUP 2024",
    status: "終了",
    description:
      "ご参加ありがとうございました！詳細は結果ページをご覧ください。"
  }
];

// フェードイン用カスタムフック
const useFadeInOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700"
    );
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("opacity-100", "translate-y-0");
          node.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
};

// イベントカード用コンポーネント
const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  const fadeRef = useFadeInOnScroll();
  return (
    <div
      ref={fadeRef}
      className="w-full max-w-xl mx-auto mb-10 bg-white/80 rounded-xl shadow-lg p-8 opacity-0 translate-y-8 transition-all duration-[1300ms] ease-in-out"
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{event.title}</h2>
      <p className="text-blue-900">{event.description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative overflow-hidden">
      <img
        src={bkimg}
        className="fixed inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
        alt="background"
      />
      <main className="relative z-20 flex flex-col items-center">
        <section className="min-h-screen flex flex-col items-center justify-center w-full bg-transparent">
          <span className="inline-block px-4 py-1 bg-blue-700/90 text-white text-xs font-bold rounded-full tracking-widest shadow-md mb-2 drop-shadow-lg">
            NPS CUP
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-blue-800 drop-shadow-2xl uppercase tracking-widest"
            style={{ fontFamily: "'Bebas Neue', 'Montserrat', sans-serif" }}
          >
            Softball Tournament
          </h1>
          <p className="text-lg mt-2 text-blue-900 drop-shadow">
            A sports event to deepen corporate exchange
          </p>
        </section>
        <section className="w-full bg-white relative z-20 flex flex-col items-center pt-12 pb-24">
          {events.map((event) => (
            <EventCard key={event.year} event={event} />
          ))}
          <section className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">イベント履歴</h2>
            <ul className="space-y-6">
              {events.map((event) => (
                <li
                  key={event.year}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <div className="text-xl font-bold">{event.year}年度</div>
                  <div className="text-sm text-blue-700 font-semibold mb-1">
                    {event.status}
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
      <footer className="w-full bg-white text-center text-sm text-gray-500 py-6 relative z-30">
        &copy; 2025 Softball Event Committee
      </footer>
    </div>
  );
};

export default App;
