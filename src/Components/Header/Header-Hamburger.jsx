export const Hamburger = () => {
  return (
    <div className="lg:hidden">
      <details className="dropdown ">
        <summary className="btn btn-ghost btn-circle">
          <div class="space-y-1.5 lg:hidden">
            <div class="w-6 h-0.5 rounded-full bg-blue-600"></div>
            <div class="w-6 h-0.5 rounded-full bg-blue-600"></div>
            <div class="w-6 h-0.5 rounded-full bg-blue-600"></div>
          </div>
        </summary>
        <ul className="p-2 shadow-blue-600 menu dropdown-content dropdown-end z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Kategori</a>
          </li>
          <li>
            <a>Profil</a>
          </li>
          <li>
            <a>Bantuan</a>
          </li>
        </ul>
      </details>
    </div>
  );
};
