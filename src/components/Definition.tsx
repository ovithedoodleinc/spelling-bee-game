type DefinitionProps = {
  definition: string;
};

export default function Definition({ definition }: DefinitionProps) {
  return <p>{definition ? definition : "no definition found"}</p>;
}
