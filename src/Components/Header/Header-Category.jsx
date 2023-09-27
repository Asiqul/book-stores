function HeaderCategory() {
    return (
        <div className="hidden lg:block">
            <div className="dropdown dropdown-hover">
                <label
                    tabIndex={0}
                    className="btn btn-ghost rounded-full text-tertiary uppercase font-semibold font-heading"
                >
                    Kategori
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-main rounded-box w-72">
                    <li className="my-1.5">
                        <a>Item 1</a>
                    </li>
                    <li className="my-1.5">
                        <a>Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderCategory;
