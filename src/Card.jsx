import Title from "./Title";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";

export default function Card() {
  return (
    <div>
      <Title>This app developed By Haider Alwaqfi</Title>
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
