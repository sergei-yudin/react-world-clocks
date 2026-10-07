import { useEffect, useState } from "react";
import { ClockForm } from "./components/ClockForm";
import { WorldClockList } from "./components/WorldClockList";
import type { ClockData } from "./types";
import "./App.css";

export default function App() {
  const [clocks, setClocks] = useState<ClockData[]>([
    { id: "tokyo", name: "Токио", offset: 9 },
    { id: "london", name: "Лондон", offset: 0 },
  ]);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const addClock = (name: string, offset: number) => {
    setClocks((items) => [...items, { id: crypto.randomUUID(), name, offset }]);
  };

  const removeClock = (id: string) => {
    setClocks((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main className="page">
      <header>
        <span>Жизненный цикл React</span>
        <h1>Мировые часы</h1>
        <p>Текущее время в выбранных часовых поясах</p>
      </header>
      <ClockForm onAdd={addClock} />
      <WorldClockList clocks={clocks} now={now} onRemove={removeClock} />
    </main>
  );
}
