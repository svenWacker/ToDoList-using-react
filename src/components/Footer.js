const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <h4>CopyrightÂ© {year}</h4>
    </div>
  );
};
export default Footer;
