export const BreakLinedTextSpan = ({
  textList,
  className = "",
}: {
  textList: readonly string[];
  className?: string;
}) => {
  return (
    <span className={className}>
      {textList.map((text, idx) => (
        <span key={idx} className="break-keep whitespace-nowrap">
          {text}
          {idx < textList.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
};
