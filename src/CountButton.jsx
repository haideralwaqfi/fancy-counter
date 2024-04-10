import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    type === "pluse"
      ? setCount((prev) => {
          const newCount = prev + 1;
          if (newCount > 5) {
            return 5;
          }
          return newCount;
        })
      : setCount((prev) => {
          const newCount = prev - 1;
          if (newCount < 0) {
            return 0;
          }
          return newCount;
        });
    event.currentTarget.blur();
  };
  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
