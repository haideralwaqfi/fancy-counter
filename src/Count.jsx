export default function Count({ number, size = "md" }) {
  return (
    <>
      <CountTitle />
      <p className="count">{number}</p>
    </>
  );
}

function CountTitle() {
  return (
    <>
      <h2>Current Count is: </h2>
    </>
  );
}
