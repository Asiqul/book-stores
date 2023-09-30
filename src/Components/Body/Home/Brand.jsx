import Subtitle from './Subtitle';
import { brands } from '../../../../public/brand/brands';

const Brand = () => {
    return (
        <>
            <div className="my-6 container mx-auto">
                <Subtitle title="Brand Pilihan" />
            </div>
            <div className="gap-4 grid grid-cols-6 container mx-auto">
                {brands.map((brand) => (
                    <img
                        key={brand.id}
                        className="object-contain border border-border border-opacity-20 w-full h-[85px] shadow-sm"
                        src={brand.image}
                        alt="brand"
                    />
                ))}
            </div>
        </>
    );
};

export default Brand;
