import { TWordHistory } from "@/types";

type WordHisotryProps = {
  wordHistory: TWordHistory[];
};

export default function WordHistory({ wordHistory }: WordHisotryProps) {
  return wordHistory.length > 0 ? (
    <ul>
      {wordHistory.map((word, index) => (
        <li key={index}>
          {word.word} - {word.score}
        </li>
      ))}
    </ul>
  ) : (
    <p>no word history</p>
  );
}
