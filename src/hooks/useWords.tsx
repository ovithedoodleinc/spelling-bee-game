import { useEffect, useState } from "react";

export default function useWords() {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const getWords = async () => {
      try {
        const res = await fetch(
          "https://random-word-api.herokuapp.com/word?number=10"
        );
        console.log("🚀 ~ getWords ~ res:", res);
        const words = await res.json();
        // console.log("🚀 ~ getWords ~ words:", words);

        setWords(words);
      } catch (err) {
        console.log("🚀 ~ getWords ~ err:", err);
      }
    };

    getWords();
  }, []);

  return [words];
}
