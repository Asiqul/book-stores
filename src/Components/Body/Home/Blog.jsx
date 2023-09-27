import Subtitle from "./Subtitle";

const Blog = () => {
  return (
    <div className="mx-auto container">
      <div className="my-6">
        <Subtitle title="Blog BukuKita" />
      </div>
      <div className="md:flex">
        <div>
          <img
            className=" h-[280px] object-cover w-full"
            src="./public/blog_bukuKita/cover-sampul-rekomenadi-buku-anak.jpg"
            alt="blog"
          />
          <p className="mt-2">BUKU ANAK</p>
          <p className=" text-xl font-bold text-tertiary">
            10 Rekomendasi Buku Pelajaran dan Dongeng Anak untuk Meningkatkan
            Literasi Sejak Dini
          </p>
          <p className="mt-5 text-border">26 September 2023</p>
        </div>

        <div className="mt-8 md:ml-4 ml-0 md:mt-0">
          <div className="flex flex-col flex-1">
            <div className="flex">
              <img
                className="h-[120px] object-cover w-[120px]"
                src="./public/blog_bukuKita/BOBO-01667.jpg"
                alt="blog"
              />
              <div className="ml-2">
                <p>BUKU REKOMENDASI</p>
                <p className=" text-tertiary font-bold">
                  10 Rekomendasi Buku untuk Remaja, Mulai dari Fiksi sampai
                  Nonfiksi
                </p>
                <p className="text-border">25 September 2023</p>
              </div>
            </div>

            <div className="flex mt-4">
              <img
                className="h-[120px] object-cover w-[120px]"
                src="./public/blog_bukuKita/Screenshot-2023-09-12-091713.png"
                alt="blog"
              />
              <div className="ml-2">
                <p>PRE ORDER BUKU</p>
                <p className=" text-tertiary font-bold">
                  Majalah Bobo Edisi Koleksi 50 Tahun Cerpen dan Dongeng,
                  Nostalgia Jilid Dua!
                </p>
                <p className="text-border">28 october 2023</p>
              </div>
            </div>

            <div className="flex mt-4">
              <img
                className="h-[120px] object-cover w-[120px]"
                src="./public/blog_bukuKita/Screenshot-2023-09-25-103136.png"
                alt="blog"
              />
              <div className="ml-2">
                <p>PROMO</p>
                <p className="text-tertiary font-bold">
                  Things Left Behind: Sosialisasi dan Komunikasi Menyelamatkan
                  Hidup
                </p>
                <p className="text-border">27 november 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
