
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <ul className="flex justify-center gap-8 p-4 font-semibold text-blue-800">
        <li><a href="/">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
