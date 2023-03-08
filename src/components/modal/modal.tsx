import { useDispatch } from 'react-redux';

import { changeModalActive } from 'store_toolkit/modal_active_slice';
import './index.css';

export function Modal() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[rgba(0,0,0,0.4)] fixed top-0 left-0">
      <div className="w-[422px] modal-content pb-[43px] pt-[48px] px-[50px] bg-[#262628]">
        <span className="block uppercase text-colorAccent text-center text-custom_xll bold mb-[29px]">
          MetaMask extention
        </span>
        <p className="text-center inter-ff mb-16">
          To work with our application, you have to install the{' '}
          <span className="text-colorAccent">Metamask browser extension</span>
        </p>
        <button
          className="block m-auto px-6 pt-2.5 pb-1.5 bg-bgDefaultBtn rounded-custom_Rad"
          type="button"
          onClick={() => dispatch(changeModalActive())}
        >
          Skip this step
        </button>
      </div>
    </div>
  );
}
