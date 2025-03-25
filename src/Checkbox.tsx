interface CheckboxProps {
  name: string
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ name, label, checked, onChange }: CheckboxProps) {
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
  )
}

export default Checkbox
