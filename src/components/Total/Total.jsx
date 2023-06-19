import classNames from "classnames";

function Total({ checkboxes, className }) {
  const totalClassName = classNames(className);

  const renderCounterText = () => {
    const itemCount = checkboxes.length;
    if (itemCount === 0) {
      return <p>There is no item yet</p>;
    } else if (itemCount === 1) {
      return <p>{itemCount} Item</p>;
    } else {
      return <p>{itemCount} Items</p>;
    }
  };

  return (
    <div>
      <p className={`${totalClassName}`}>{renderCounterText()}</p>
    </div>
  );
}

export default Total;
