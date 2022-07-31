import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({ id, p_name }) => {
  const route = useRouter();
  return (
    <div
      className="group relative w-96 my-2 cursor-pointer"
      onClick={() => route.push(`/products/${id}`)}
    >
      <Image
        className="w-full object-cover rounded-md"
        src="/img/hero-picture.jpeg"
        alt=""
        width={500}
        height={500}
      />
      <div className="absolute top-0 left-0 w-full h-0 flex flex-col rounded-md justify-center items-center bg-black/70 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
        <h1 className="text-2xl text-white">{p_name}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
