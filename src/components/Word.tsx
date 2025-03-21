import useWordDetails from "@/hooks/useWordDetails";
import Definition from "./Definition";
import Pronunciation from "./Pronunciation";

type WordProps = {
  word: string;
};

export default function Word({ word }: WordProps) {
  const [wordDetails] = useWordDetails(word);

  return (
    <div>
      <Pronunciation pronunciation={wordDetails.audio} />
      <Definition definition={wordDetails.definiton} />
    </div>
  );
}
