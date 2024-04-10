export default function Title({ children, locked }) {
  return (
    <>
      <h1 className="title">
        {locked
          ? "You Reach the limit Please Upgrade to PRO!"
          : "Fancy Counter"}
      </h1>
      <p>{children}</p>
    </>
  );
}
