import { TWordDetails } from "@/types";
import { useEffect, useState } from "react";

export default function useWordDetails(word: string) {
  const [wordDetails, setWordDetails] = useState<TWordDetails>({
    audio: "",
    definiton: "",
  });

  useEffect(() => {
    const getWordDetails = async () => {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if (!res.ok) {
          throw res.status;
        }

        const wordDetails = await res.json();
        // console.log("🚀 ~ getWordDetails ~ wordDetails:", wordDetails);

        setWordDetails({
          audio: wordDetails?.[0]?.phonetics?.[0]?.audio as string,
          definiton: wordDetails?.[0]?.meanings?.[0]?.definitions?.[0]
            ?.definition as string,
        });
      } catch (err) {
        console.log("🚀 ~ getWordDetails ~ err:", err);
      }
    };

    if (word) {
      getWordDetails();
    }
  }, [word]);

  return [wordDetails];
}
