import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

  const inputClassName = clsx(styles.input, className, {
    [styles["inputWithImage"]]: withImage,
  });

  return (
    <input
      className={inputClassName}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
}
