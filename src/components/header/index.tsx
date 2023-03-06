import { Link } from 'react-router-dom';

import { ConnectButton } from 'components/connect_button';

export function Header(props: { account: string | undefined }) {
  const { account } = props;
  const accAdress = account?.slice(0, 20);
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
          className="pt-[27px] text-custom_s font-bold text-colorAccent"
        >{`${accAdress}...`}</Link>
      ) : (
        <ConnectButton />
      )}
    </header>
  );
}
