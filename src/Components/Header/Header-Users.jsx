import user from '../../assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div className="lg:hidden pt-2">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-circle">
          <img src={user} alt="" className="bg-transparent" />
        </summary>
        <ul className="p-2 shadow-lg menu dropdown-content dropdown-end z-[1] bg-main rounded-box w-52">
          <li className="my-1.5 text-second hover">
            <Link to="/register">Daftar</Link>
          </li>
          <li className="my-1.5 text-second">
            <Link to="/login">Masuk</Link>
          </li>
        </ul>
      </details>
    </div>
  );
}
export default Users;
