export default function Count({ count }) {
  return (
    <>
      <CountTitle />
      <p className="count">{count}</p>
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
