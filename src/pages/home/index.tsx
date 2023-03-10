import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUsername, updateEmail } from 'store_toolkit/user_slice';
import { addUserToParticipants } from 'store_toolkit/participants_slice';
import { changeShowList } from 'store_toolkit/show_list';

import { ParticipantsBlock } from 'components/participants_block/participants_block';

import { validateForm } from 'helpers/validates';
import { checkUserInList } from 'helpers/check_user_in_list';
import { Store, InputEvent } from 'helpers/interfaces';

import './index.css';
import { staticIdForUser } from 'helpers/const';

export function Home() {
  const { participants, user, showList } = useSelector((store: Store) => store);
  const { username, email, address } = user;
  const dispatch = useDispatch();

  const [betaTestName, setBetaTestName] = useState('');
  const [betaTestEmail, setBetaTestEmail] = useState('');
  const [attrDisabled, setAttrDisabled] = useState(!address);
  const [checkParticipant, setCheckParticipant] = useState(
    checkUserInList(participants, staticIdForUser)
  );

  const betaTestSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm(betaTestName, betaTestEmail)) {
      dispatch(updateUsername(betaTestName));
      dispatch(updateEmail(betaTestEmail));
      if (!showList) {
        dispatch(changeShowList());
      }
    }
  };
  const reRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUsername(betaTestName));
    dispatch(updateEmail(betaTestEmail));
    dispatch(
      addUserToParticipants({
        username: betaTestName,
        email: betaTestEmail,
        id: staticIdForUser,
        address,
      })
    );
  };

  useEffect(() => {
    setCheckParticipant(checkUserInList(participants, staticIdForUser));
  }, [participants]);
  useEffect(() => {
    setAttrDisabled(Boolean(!address));
  }, [address]);

  return (
    <div className="multi-bg_custom_full pt-52 pb-[108px]  px-16">
      <div className="relative flex justify-between align-top gap-x-[106px]">
        <div>
          <div className="max-w-[1007px] text-custom_xlll font-bold custom-text-filter">
            Explore Your own planet In{' '}
            <span className="transp-and-stroke">our New</span> metaverse
          </div>
          <div className="w-[421px] font-AvenirNextCyr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className="absolute top-[-126px] right-[473px] w-[80px] h-[30px] bg-[#fff] text-[#171719] py-2 pl-[12px] rounded-[15px]">
          <div className="font-bold text-custom_table">Q1 2022</div>
          <div className="w-[12px] h-[12px] absolute top-[9px] right-[12px] bg-bgDefaultBtn rounded-[50%] border-[3px] border-[white] shadow" />
        </div>

        <div className="flex-column justify-center mt-[17px]">
          <div className="px-[14px] mb-[42px] text-custom_xl font-bold tracking-[1px]">
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
          {showList ? (
            <div>
              {checkParticipant ? (
                <div>
                  <div className="mb-2 text-custom_m">Name</div>
                  <div className="mb-[22px] text-colorAccent text-custom_xl">
                    {username}
                  </div>
                  <div className="mb-2 text-custom_m">Email</div>
                  <div className=" text-colorAccent text-custom_xl">
                    {email}
                  </div>
                </div>
              ) : (
                <form
                  id="reRegistration"
                  onSubmit={(event) => reRegistration(event)}
                >
                  <p>
                    <label
                      className="block mb-2 text-custom_m"
                      htmlFor="firstName"
                    >
                      Name
                    </label>

                    <input
                      onInput={(event: InputEvent) =>
                        setBetaTestName(event.target.value)
                      }
                      disabled={attrDisabled}
                      autoComplete="off"
                      placeholder="We will display your name in participation list "
                      className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none  focus:border-inputFocus  focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                      type="text"
                      id="firstName"
                    />
                  </p>
                  <p className="mt-[22px]">
                    <label className="block mb-2 text-custom_m" htmlFor="email">
                      Email
                    </label>
                    <input
                      onInput={(event: InputEvent) =>
                        setBetaTestEmail(event.target.value)
                      }
                      autoComplete="off"
                      disabled={attrDisabled}
                      placeholder="We will display your email in participation list "
                      className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none focus:border-inputFocus focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                      type="email"
                      id="email"
                    />
                  </p>
                </form>
              )}
              <button
                form="reRegistration"
                disabled={Boolean(checkParticipant)}
                className="mt-7 px-6 pt-2.5 pb-2 rounded-custom_Rad bg-bgDefaultBtn text-custom_s font-bold uppercase hover:bg-bgHoverBtn disabled:pointer-events-none disabled:opacity-50"
                type="submit"
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

                <input
                  onInput={(event: InputEvent) =>
                    setBetaTestName(event.target.value)
                  }
                  disabled={attrDisabled}
                  autoComplete="off"
                  placeholder="We will display your name in participation list "
                  className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none  focus:border-inputFocus  focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                  type="text"
                  id="firstName"
                />
              </p>
              <p className="mt-[22px]">
                <label className="block mb-2 text-custom_m" htmlFor="email">
                  Email
                </label>
                <input
                  onInput={(event: InputEvent) =>
                    setBetaTestEmail(event.target.value)
                  }
                  autoComplete="off"
                  disabled={attrDisabled}
                  placeholder="We will display your email in participation list "
                  className="w-[421px] h-[42px] border rounded-custom_Rad pl-[18px] py-3 bg-[#171719] font-AvenirNextCyr outline-none focus:border-inputFocus focus:placeholder-transparent disabled:placeholder:opacity-25 disabled:border-inputDisabled"
                  type="email"
                  id="email"
                />
              </p>
              <button
                disabled={attrDisabled}
                className="px-6 pt-2.5 pb-2 mt-6 rounded-custom_Rad bg-bgDefaultBtn text-custom_s font-bold uppercase hover:bg-bgHoverBtn disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Get early access
              </button>
            </form>
          )}
        </div>
        {showList ? <ParticipantsBlock /> : null}
      </div>
    </div>
  );
}
