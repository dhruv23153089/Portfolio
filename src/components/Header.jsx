const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skillsets' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  return (
    <header>
      <h1 className="portfolio">Portfolio</h1>
      <nav className="navbar">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
