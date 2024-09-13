
// eslint-disable-next-line react/prop-types
const Button = ({ color, bgcolor, label, type, onClick, width }) => {
    return (
        <button
            style={{ color: color || "#fff", background: bgcolor || "#0c8599", padding: "6px 12px", borderRadius: 5, cursor: "pointer", border: 0, width: width }}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
};

export default Button;