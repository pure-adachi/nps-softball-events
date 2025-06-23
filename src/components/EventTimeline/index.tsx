const events = [
  {
    year: "2025",
    status: "計画中",
    description: "現在日程と会場を調整中です。他社の参加も募集中！"
  },
  {
    year: "2024",
    status: "開催済み",
    description: "5月に開催され、○○社が優勝。参加者120人で盛況でした。"
  }
];

const EventTimeline = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">イベント履歴</h2>
      <ul className="space-y-6">
        {events.map((event) => (
          <li key={event.year} className="border-l-4 border-blue-500 pl-4">
            <div className="text-xl font-bold">{event.year}年度</div>
            <div className="text-sm text-blue-700 font-semibold mb-1">
              {event.status}
            </div>
            <p className="text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventTimeline;
