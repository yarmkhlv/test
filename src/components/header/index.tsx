import { Link } from 'react-router-dom';

import { ConnectButton } from 'components/connect_button';

export function Header() {
  return (
    <header className="flex justify-between px-16">
      <Link
        to="/"
        className="mt-3.5 py-3 px-20 inline-block border border-dashed border-borLogo bg-bgLogo text-custom_s uppercase"
      >
        logo
      </Link>
      <ConnectButton />
    </header>
  );
}
