import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <Link to='/'>Home</Link>
      <Link to='/todo'>Todos</Link>
    </nav>
  );
}
