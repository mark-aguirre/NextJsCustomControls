interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  layout?: 'vertical' | 'horizontal';
}

export default function FormInput({ id, label, type = 'text', placeholder, value, onChange, layout = 'vertical' }: FormInputProps) {
  return (
    <div className={`form-group ${layout === 'horizontal' ? 'form-group-horizontal' : ''}`}>
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        id={id}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}