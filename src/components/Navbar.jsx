import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <h1>Toko tokoan</h1>
      <Link to='/'>home</Link>
      <Link to='/tentang'>tentang</Link>
      <Link to='/produk'>produk</Link>
      <Link to='/flicking'>Flicking</Link>
    </nav>
  );
}
