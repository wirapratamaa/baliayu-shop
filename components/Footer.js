import { FaFacebook, FaInstagram } from "../node_modules/react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-1 items-center p-10 border shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10">
      <div className="flex flex-col flex-[0.5] w-full">
        <span className="text-center">Follow Our Social Media</span>
        <div className="flex items-center mt-4 space-x-4">
          <a
            href="https://www.facebook.com/baliayunature/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <span>Bali Ayu Official shop</span>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <a
            href="https://www.instagram.com/baliayushop.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <span>baliayushop.id</span>
        </div>
      </div>
      <div className="flex flex-[0.5] justify-center">TEST</div>
    </div>
  );
};

export default Footer;
