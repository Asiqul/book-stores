function AuthButton(props) {
  const { tag, type } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-10">
      {tag == 'Masuk' ? (
        <a
          href="#"
          className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
        >
          Lupa kata sandi?
        </a>
      ) : (
        <div className="flex gap-3 justify-center items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-accent"
          />
          <p className="text-md text-tertiary">
            Dengan mendaftar, anda menyetujui{' '}
            <a
              href="#"
              className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
            >
              Syarat dan Ketentuan.
            </a>
          </p>
        </div>
      )}
      <button
        type={type}
        className="btn bg-second rounded-full font-heading text-lg font-semibold w-full text-main hover:text-second"
      >
        {tag}
      </button>
      <div>
        {tag == 'Masuk' ? (
          <span>
            Belum punya akun? <a href="#">Daftar</a>
          </span>
        ) : (
          <div>
            Sudah punya akun?{' '}
            <a
              href="#"
              className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
            >
              Masuk
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthButton;
