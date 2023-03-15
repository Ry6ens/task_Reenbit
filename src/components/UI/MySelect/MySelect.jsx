import { Select } from './MySelect.styled';

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <Select value={value} onChange={e => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </Select>
  );
}
