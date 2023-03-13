import cn from "classnames";
function Badge({ children, textColor, bgColor, className }) {
  return (
    <p
      className={cn(
        `flex justify-center items-center  py-[6px] text-[10px] leading-[12px] rounded-[100rem] px-[9px]`,
        className
      )}
      style={{
        background: bgColor,
        color: textColor,
      }}
    >
      {children}
    </p>
  );
}
export default Badge;
