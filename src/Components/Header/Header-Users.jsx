import user from '../../assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div className="lg:hidden pt-2">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-circle">
          <img src={user} alt="" className="bg-transparent" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content dropdown-end z-[1] bg-base-100 rounded-box w-52">
          <li className="my-1.5">
            <Link to="/register">Register</Link>
          </li>
          <li className="my-1.5">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </details>
    </div>
  );
}
export default Users;
