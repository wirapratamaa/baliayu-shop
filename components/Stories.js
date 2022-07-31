import Image from "next/image";

const Stories = () => {
  return (
    <>
      <div className="text-green-600 text-4xl text-center my-10">
        Background Stories
      </div>
      <div className="mt-4">
        <div className="flex md:flex-row flex-col items-center">
          <div className="flex flex-1 justify-center md:my-0 my-3">
            <div
              className="border-black rounded-full"
              style={{ border: "1px solid black", height: 200, width: 200 }}
            >
              <Image src="" width={200} height={200} alt="" objectFit="cover" />
            </div>
          </div>
          <div className="flex-1 pr-5 border border-green-600 p-4 rounded">
            <p className="text-justify">
              Meet our founder, Komang Yatik Komang Yatik has a concern for the
              abundance of coconuts and coconut waste that comes from religious
              ceremony waste into an aromatherapy craft product and a spa
              product that has high economic value. Established on 1 November
              1999 located in Gianyar Bali. Our products are sourced from local
              farmers from all over Bali Indonesia. We focus on producing
              aromatherapy crafts and spa products that utilize natural
              resources and waste from ceremonies which are then processed into
              unique products that have a high selling value. We do it 100%
              handmade while supporting the many talented Indonesian craftsmen
              around our factory. In addition, we want our team to live well.
              Ensure that craftsmen have good work and living space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
