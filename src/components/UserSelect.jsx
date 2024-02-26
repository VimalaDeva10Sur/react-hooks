import { forwardRef } from "react";

const UserSelect = forwardRef((props, ref) => {
  const { onChange } = props ?? {};

  return (
    <label>
      Select the User :
      <select name="user" onChange={onChange} ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </label>
  );
});

export default UserSelect;
