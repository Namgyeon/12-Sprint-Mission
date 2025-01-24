import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  withImage?: boolean;
  className?: string;
};

export default function Input({
  value,
  placeholder,
  onChange,
  onEnter,
  withImage,
  className,
  ...rest
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  const inputClassName = clsx(className, styles.input, {
    [styles["inputWithImage"]]: withImage,
  });

  return (
    <input
      className={inputClassName}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
}
