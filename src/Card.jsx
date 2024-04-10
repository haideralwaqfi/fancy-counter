import Title from "./Title";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count number={5} size="lg" />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
