type CheckboxProps = {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-2 text-gray-400 font-light">
      <input
        type="checkbox"
        className="rounded border-gray-800"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
