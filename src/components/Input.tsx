import { FormEvent } from "react";

type InputProps = {
  word: string;
  setWord: (word: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function Input({ word, setWord, handleSubmit }: InputProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border border-white px-2 py-1"
        type="text"
        name="text"
        id="text"
        placeholder="type the word"
      />
    </form>
  );
}
