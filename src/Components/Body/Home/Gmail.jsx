import Subtitle from "./Subtitle";

const Gmail = () => {
  return (
    <div>
      <div className="mt-12 py-12 mx-auto bg-second justify-around flex items-center">
        <Subtitle title="Kejutan spesial dari kami hanya untukmu" />
        <div className="mt-4">
          <input
            type="email"
            placeholder="Masukkan Email Anda Disini..."
            className="p-4 w-[450px] rounded-l"
          />
          <button className="bg-cards py-4 px-8 rounded-r">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
