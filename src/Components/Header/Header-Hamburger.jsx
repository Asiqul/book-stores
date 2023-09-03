function Hamburger() {
  return (
    <div className="lg:hidden">
      <details className="dropdown ">
        <summary className="btn btn-ghost btn-circle">
          <div className="space-y-1.5 lg:hidden bg-transparent">
            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
          </div>
        </summary>
        <ul className="p-4 shadow-lg menu dropdown-content dropdown-end z-[1] bg-main rounded-box w-52">
          <li className="my-1 text-second">
            <a>Kategori</a>
          </li>
          <li className="my-1 text-second">
            <a>Profil</a>
          </li>
          <li className="my-1 text-second">
            <a>Bantuan</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Hamburger;
