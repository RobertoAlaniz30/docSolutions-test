import { forwardRef } from "react";
import "./styles.css"
const InputField = forwardRef(({ type, children, name, placeholder }, ref) => {
  return (
    <div className="inputField__container">
      <label>{children}</label>
      <input type={type} name={name} ref={ref} placeholder={placeholder} />
    </div>
  );
});
export default InputField;
