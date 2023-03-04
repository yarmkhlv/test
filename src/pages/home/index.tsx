import './index.css';

export function Home() {
  return (
    <div className="pt-52 pb-[108px]  px-16">
      <div className="flex justify-between align-top gap-x-[106px]">
        <div>
          <div className="text-custom_xlll font-bold">
            Explore Your own planet
            <br />
            In <span className="transp-and-stroke">our New</span> metaverse
          </div>
          <div className="w-[421px] font-AvenirNextCyr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className="flex-column justify-center mt-[17px]">
          <div className="px-[15px] mb-[42px] text-custom_xl font-bold tracking-[1px]">
            Roadmap stats
          </div>
          <div className="flex-column">
            <div className="mb-3 text-custom_l font-bold text-colorAccent text-center">
              12, 345
            </div>
            <div className="mb-2 text-custom_s text-center">
              Lorem ipsum dolor
            </div>
            <div className="h-[0.5px] mb-2 bg-[#D2C4C4]" />
          </div>
          <div className="flex-column">
            <div className="mb-3 text-custom_l font-bold text-colorAccent text-center">
              12, 345
            </div>
            <div className="mb-2 text-custom_s text-center">
              Lorem ipsum dolor
            </div>
            <div className="h-[0.5px] mb-2 bg-[#D2C4C4]" />
          </div>
          <div className="flex-column">
            <div className="mb-3 text-custom_l font-bold text-colorAccent text-center">
              12, 345
            </div>
            <div className="mb-2 text-custom_s text-center">
              Lorem ipsum dolor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
