import type { ClockData } from "../types";
import { WorldClock } from "./WorldClock";

type Props = {
  clocks: ClockData[];
  now: Date;
  onRemove: (id: string) => void;
};

export function WorldClockList({ clocks, now, onRemove }: Props) {
  return (
    <section className="clocks">
      {clocks.map((clock) => (
        <WorldClock
          key={clock.id}
          {...clock}
          now={now}
          onRemove={() => onRemove(clock.id)}
        />
      ))}
    </section>
  );
}
