import user from '../../assets/icons/user-icon.svg';

function Users() {
  return (
    <div className="lg:hidden">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-circle">
          <img src={user} alt="" className="pt-1" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content dropdown-end z-[1] bg-base-100 rounded-box w-52">
          <li className="my-1.5">
            <a>Register</a>
          </li>
          <li className="my-1.5">
            <a>Login</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
export default Users;
