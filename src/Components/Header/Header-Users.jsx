import user from '../../assets/icons/user-icon.svg';

export const Users = () => {
  return (
    <div className="lg:hidden">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-circle">
          <img src={user} alt="" className="pt-1" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content dropdown-end z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export const HeaderLogin = () => {
  return (
    <div className="hidden lg:block">
      <div>
        <a>
          <button className="btn btn-ghost text-blue-600">Masuk</button>
        </a>
      </div>
    </div>
  );
};
