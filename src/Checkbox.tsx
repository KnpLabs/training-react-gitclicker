function Checkbox({ name, label, checked, onChange }) {
  return (
    <div>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Checkbox;
