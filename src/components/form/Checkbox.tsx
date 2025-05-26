type CheckboxProps = {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer text-gray-400 font-light">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600 bg-gray-800 border-gray-600 rounded"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
