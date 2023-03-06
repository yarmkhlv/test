import { useState } from 'react';

import { ParticipantsBlock } from 'components/participants_block/participants_block';

import { validateForm } from 'helpers/validates';
import { InputEvent } from 'helpers/interfaces';
import './index.css';

export function Home(props: { account: string | undefined }) {
  const { account } = props;
  const disable = !account;
  const [betaTestName, setBetaTestName] = useState('');
  const [betaTestEmail, setBetaTestEmail] = useState('');
  const [betaTestCheck, setBetaTestCheck] = useState(false);

  const betaTestSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBetaTestCheck(validateForm(betaTestName, betaTestEmail));
  };

  return (
    <div className="pt-52 pb-[108px]  px-16">
      <div className="relative flex justify-between align-top gap-x-[106px]">
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

      <div className="flex mt-[106px]">
        <div className="mr-[136px]">
          <h2 className="text-custom_xll font-bold text-colorAccent">
            Beta test registration
          </h2>
          <p className="w-[421px] mt-[18px] mb-9 font-AvenirNextCyr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>
          {betaTestCheck ? (
            <div>
              <div className="mb-2 text-custom_m">Name</div>
              <div className="mb-[22px] text-colorAccent text-custom_xl">
                {betaTestName}
              </div>
              <div className="mb-2 text-custom_m">Email</div>
              <div className="mb-7 text-colorAccent text-custom_xl">
                {betaTestEmail}
              </div>
              <button
                className="px-6 pt-2.5 pb-2 rounded-custom_Rad bg-bgDefaultBtn text-custom_s font-bold uppercase hover:bg-bgHoverBtn"
                type="button"
              >
                List me to the table
              </button>
            </div>
          ) : (
            <form onSubmit={(event) => betaTestSubmitData(event)}>
              <p>
                <label className="block mb-2 text-custom_m" htmlFor="firstName">
                  Name
                </label>
                <br />
                <input
                  onInput={(event: InputEvent) =>
                    setBetaTestName(event.target.value)
                  }
                  disabled={disable}
                  autoComplete="off"
                  placeholder="We will display your name in participation list "
                  className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none  focus:border-inputFocus  focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                  type="text"
                  id="firstName"
                />
              </p>
              <p className="mt-[18px]">
                <label className="block mb-2 text-custom_m" htmlFor="email">
                  Email
                </label>
                <input
                  onInput={(event: InputEvent) =>
                    setBetaTestEmail(event.target.value)
                  }
                  autoComplete="off"
                  disabled={disable}
                  placeholder="We will display your email in participation list "
                  className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none focus:border-inputFocus focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                  type="email"
                  id="email"
                />
              </p>
              <button
                className="px-6 pt-2.5 pb-2 mt-6 rounded-custom_Rad bg-bgDefaultBtn text-custom_s font-bold uppercase hover:bg-bgHoverBtn"
                type="submit"
              >
                Get early access
              </button>
            </form>
          )}
        </div>
        {betaTestCheck ? <ParticipantsBlock /> : null}
      </div>
    </div>
  );
}
