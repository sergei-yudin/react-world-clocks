type Props = {
  name: string;
  offset: number;
  now: Date;
  onRemove: () => void;
};

export function WorldClock({ name, offset, now, onRemove }: Props) {
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000;
  const time = new Date(utc + offset * 3_600_000).toLocaleTimeString("ru-RU", {
    hour12: false,
  });

  return (
    <article className="clock">
      <button
        className="remove"
        aria-label={`Удалить ${name}`}
        onClick={onRemove}
      >
        ×
      </button>
      <h2>{name}</h2>
      <div className="time">{time}</div>
      <small>
        UTC{offset >= 0 ? "+" : ""}
        {offset}
      </small>
    </article>
  );
}
