function Button() {
  return (
    <div className="bg-transparent flex justify-center pt-3">
      <button
        type="submit"
        className="py-1 bg-second rounded-full font-semibold w-1/2 border-2 border-second text-main hover:text-second hover:bg-white transition-all duration-200 ease-in-out"
      >
        Simpan
      </button>
    </div>
  );
}

export default Button;
