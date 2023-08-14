export const HeaderCategory = () => {
  return (
    <div className="hidden lg:block">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="btn btn-ghost rounded-full text-blue-600"
        >
          Kategori
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
