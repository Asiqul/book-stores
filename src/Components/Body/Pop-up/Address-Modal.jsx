import { useState } from 'react';
import Button from './Button';
import Forms from './Forms';
import { AiOutlineClose } from 'react-icons/ai';

function Address() {
    const [isClosed, setIsclosed] = useState(false);

    return (
        <div
            className={`${
                isClosed ? 'hidden' : 'fixed'
            } top-0 bg-[#000000] bg-opacity-60 z-50 min-h-screen min-w-full flex justify-center items-center px-14`}
        >
            <div className="bg-white rounded-xl shadow-sm shadow-inset-0 shadow-white w-full px-6 py-6 md:w-1/2">
                <button onClick={() => setIsclosed(!isClosed)}>
                    <AiOutlineClose size={20} />
                </button>
                <div className="w-full flex justify-center items-center bg-transparent">
                    <h3 className="font-semibold">Tambahkan Alamat</h3>
                </div>
                <form className="flex flex-col gap-1 bg-transparent">
                    <Forms
                        type="text"
                        placeholder="Masukkan Nama Penerima"
                        id="receiver-name"
                        label="Nama Penerima"
                        opt="true"
                    />
                    <Forms
                        type="tel"
                        placeholder="Cth: 08xxxxxxxxx"
                        id="telephone"
                        label="No. Handphone"
                        pattern="[0-9]{12}"
                        opt="true"
                    />
                    <Forms type="text" placeholder="Masukkan Nama Provinsi" id="province" label="Provinsi" opt="true" />
                    <Forms type="text" placeholder="Masukkan Nama Kecamatan" id="city" label="Kecamatan" opt="true" />
                    <Forms type="number" placeholder="Cth: 123456" id="postal-code" label="Kode Pos" opt="true" />
                    <Forms
                        type="text"
                        placeholder="Masukkan Alamat Lengkap"
                        id="full-address"
                        label="Alamat Lengkap"
                        opt="true"
                    />
                    <Button />
                </form>
            </div>
        </div>
    );
}
export default Address;
