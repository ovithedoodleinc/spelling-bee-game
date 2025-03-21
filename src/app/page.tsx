"use client";

import HighScores from "@/components/HighScores";
import Input from "@/components/Input";
import Timer from "@/components/Timer";
import Word from "@/components/Word";
import WordHistory from "@/components/WordHistory";
import { WORDS } from "@/data/words";
import { TWordHistory } from "@/types";
import { FormEvent, useState } from "react";

export default function Home() {
  const [word, setWord] = useState("");
  const [wordHistory, setWordHistory] = useState<TWordHistory[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setWordHistory([...wordHistory, { word, score: getScore() }]);
  };

  const getScore = () => {
    const wordArray = word.split("");
    const WORDSArray = WORDS[0].split("");

    const score = WORDSArray.reduce((pV, cV, cI) => {
      if (wordArray[cI] === cV) return pV + 1;

      return pV + 0;
    }, 0);
    console.log("🚀 ~ score ~ score:", score);

    return score;
  };

  return (
    <div className="grid grid-cols-3 p-4 gap-4">
      <Word word={WORDS[0]} />
      <div>
        <div className="self-center flex gap-4">
          <Input word={word} setWord={setWord} handleSubmit={handleSubmit} />
          <Timer />
        </div>
        <WordHistory wordHistory={wordHistory} />
      </div>
      <HighScores />
    </div>
  );
}
