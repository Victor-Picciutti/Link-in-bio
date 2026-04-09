interface InputProps {
  name: string;
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, id, type, value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
