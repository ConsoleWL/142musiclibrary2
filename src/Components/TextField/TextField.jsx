const TextField = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
    </div>
  );
};

export default TextField;
