function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Dhruv Jaiswal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
