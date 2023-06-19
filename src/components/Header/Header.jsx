function Header({ title, className, color = "blue" }) {
  return (
    <div className="header">
      <h1 className={`header_text ${className} ${color}`}>{title}</h1>
    </div>
  );
}

export default Header;
