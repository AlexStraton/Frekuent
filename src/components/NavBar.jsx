


export default function NavBar() {
  return (
    <nav className="navbar">
         <img className="ml-8 h-20 cursor-pointer" src="/assets/SessionFinder.png"></img>
      <h1>My Website</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">My Schedule</a></li>
        <li><a href="#services">Register</a></li>
      </ul>
    </nav>
  );
}
