export function DataList({ ID, optionsList }) {
  if (!optionsList) return null;
  return (
    <datalist id={ID}>
      {optionsList.map((option, id) => (
        <option key={id} value={option} />
      ))}
    </datalist>
  );
}
