type PronunciationProps = {
  pronunciation: string;
};

export default function Pronunciation({ pronunciation }: PronunciationProps) {
  return pronunciation ? (
    <audio src={pronunciation} controls />
  ) : (
    <p>no pronunciation found</p>
  );
}
