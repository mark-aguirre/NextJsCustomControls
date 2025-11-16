interface RadioGroupProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  layout?: 'vertical' | 'horizontal';
}

export default function RadioGroup({ label, name, options, value, onChange, layout = 'vertical' }: RadioGroupProps) {
  return (
    <div className={`form-group ${layout === 'horizontal' ? 'form-group-horizontal' : ''}`}>
      <label className="form-label">{label}</label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option}
              className="radio-input"
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
            />
            <span className="radio-text">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}