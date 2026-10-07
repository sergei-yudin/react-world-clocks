import { useState, type FormEvent } from "react";

type Props = {
  onAdd: (name: string, offset: number) => void;
};

export function ClockForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [offset, setOffset] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const zone = Number(offset.replace(",", "."));

    if (!name.trim() || !Number.isFinite(zone) || zone < -12 || zone > 14) {
      setError("Введите название и смещение от −12 до +14.");
      return;
    }

    onAdd(name.trim(), zone);
    setName("");
    setOffset("");
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Название
          <input
            aria-label="Название"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Нью-Йорк"
          />
        </label>
        <label>
          Временная зона
          <input
            aria-label="Временная зона"
            value={offset}
            onChange={(event) => setOffset(event.target.value)}
            placeholder="−5"
            inputMode="decimal"
          />
        </label>
        <button>Добавить</button>
      </form>
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
    </>
  );
}
