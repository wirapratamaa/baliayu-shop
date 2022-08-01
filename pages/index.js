import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import bgImg from "../public/img/hero-picture.jpeg";

export default function Home() {
  const router = useRouter();
  return (
    <Layout title={"Home Page"}>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover px-10">
        <Image src={bgImg} alt="" layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]"></div>
        <div className="text-center z-[2] sm:w-2/5 w-2/4 py-4">
          <h2 className="sm:text-4xl text-2xl text-center bg-white/60 rounded text-black p-4 font-bold">
            Our approach reflects the people we serve. We are diverse, yet the
            same
          </h2>
          <button
            className="mt-4 bg-black text-white rounded p-4 font-bold"
            onClick={() => router.push("/about")}
          >
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
