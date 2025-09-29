import  '../../index.css';

function LinkButton({text, href}) {
  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "var(--clr-funct-high-light-1)",
    color: "var(--clr-funct-font)",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <a
        href={href}
        style={buttonStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={leaveEffect}
        >
        {text}
    </a>
  );
}

export default LinkButton;