import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Store } from 'helpers/interfaces';

import { ConnectButton } from 'components/connect_button';

export function Header() {
  const account = useSelector((store: Store) => store.user.address);

  return (
    <header className="flex justify-between items-start px-16">
      <Link
        to="/"
        className="mt-3.5 py-3 px-[86px] inline-block border border-dashed border-borLogo bg-bgLogo text-custom_s uppercase"
      >
        logo
      </Link>
      {account ? (
        <Link
          to="/"
          className="pt-[27px] text-custom_s font-bold text-colorAccent text-ellipsis overflow-hidden w-[145px] "
        >
          {account}
        </Link>
      ) : (
        <ConnectButton />
      )}
    </header>
  );
}
