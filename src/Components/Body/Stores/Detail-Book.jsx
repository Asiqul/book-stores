import "../../../Style/Desc-book.css";

const Detailbook = () => {
  return (
    <div className="container-detailbook bg-white ">
      <div>
        <h5 className="text-detail-book ">Detail Buku</h5>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-x-30 gap-y-2   ">
          <li className="grid grid-cols-1 ">
            <span className="number-of-pages font-['Inter'] text-[#808080] ">
              Jumlah Halaman
            </span>
            <span
              id="display-number-pages"
              className="number-of-pages font-['Inter']"
            >
              300
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="publisher font-['Inter'] text-[#808080] ">
              Penerbit
            </span>
            <span id="display-publisher" className="publisher font-['Inter'] ">
              gramedia
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="date-publish font-['Inter'] text-[#808080] ">
              Tanggal Terbit
            </span>
            <span
              id="display-date-publish"
              className="date-publish font-['Inter']"
            >
              01-10-2010
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="weight-book font-['Inter'] text-[#808080] ">
              Berat
            </span>
            <span
              id="display-weight-book"
              className="weight-book font-['Inter']"
            >
              500gr
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="isbn-book font-['Inter'] text-[#808080] ">
              ISBN
            </span>
            <span id="display-isbn-book" className="isbn-book font-['Inter']">
              9786230046155
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="width-book font-['Inter'] text-[#808080] ">
              Lebar
            </span>
            <span id="display-width-book" className="width-book font-['Inter']">
              10cm
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="languange-book font-['Inter'] text-[#808080] ">
              Bahasa
            </span>
            <span
              id="display-languange-book"
              className="languange-book font-['Inter']"
            >
              Indonesia
            </span>
          </li>
          <li className="grid grid-cols-1">
            <span className="length-book font-['Inter'] text-[#808080]">
              Panjang
            </span>
            <span
              id="display-length-book"
              className="length-book font-['Inter']"
            >
              10cm
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detailbook;
