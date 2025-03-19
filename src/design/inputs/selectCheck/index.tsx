import { useSelectCheck } from "@hooks/generic/useSelectCheck";
import { Size, Status } from "./types";
import { SelectCheckUI } from "./interface";
import { IOptionItem } from "./optionItem";

interface ISelectCheck {
  id: string;
  name: string;
  options: IOptionItem[];
  value: string | number;
  disabled?: boolean;
  fullwidth?: boolean;
  label?: string;
  message?: string;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  status?: Status;
  invalid?: boolean;
}

const SelectCheck = (props: ISelectCheck) => {
  const {
    id,
    name,
    options,
    value,
    disabled = false,
    fullwidth = false,
    label,
    message,
    invalid,
    onBlur,
    onChange,
    onChangeCheck,
    onClick,
    onFocus,
    placeholder,
    readonly = false,
    required = false,
    size = "wide",
    status = "pending",
  } = props;

  const {
    displayList,
    focused,
    selectRef,
    handleBlur,
    handleClick,
    handleFocus,
  } = useSelectCheck(onClick, onFocus, onBlur, readonly);

  return (
    <SelectCheckUI
      displayList={displayList}
      id={id}
      name={name}
      options={options}
      value={value}
      disabled={disabled}
      focused={focused}
      fullwidth={fullwidth}
      label={label}
      message={message}
      onBlur={handleBlur}
      onChange={onChange}
      onChangeCheck={onChangeCheck}
      onClick={handleClick}
      onFocus={handleFocus}
      placeholder={placeholder}
      readonly={readonly}
      ref={selectRef}
      required={required}
      size={size}
      status={status}
      invalid={invalid}
    />
  );
};

export { SelectCheck };
export type { ISelectCheck };
