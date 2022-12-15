export default function Item({ title, children, noBorder = false }) {
  return (
    <div
      className={`flex lg:flex-row flex-col py-3 text-sm  ${
        !noBorder ? 'border-b border-gray-400' : ''
      }`}
    >
      <div className="lg:w-80 font-bold">{title}:</div>
      <div className="truncate">{children}</div>
    </div>
  );
}
