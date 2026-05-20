interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  const buttonClassName = className?.length
    ? className
    : "h-10 cursor-pointer rounded-2xl border bg-slate-50 px-4 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <button
      type="button"
      role="button"
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
