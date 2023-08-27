import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/">
        <h1 className="font-logo text-tertiary">
          Buku<span className="text-accent">Kita</span>
        </h1>
      </Link>
    </>
  );
}
export default Logo;
