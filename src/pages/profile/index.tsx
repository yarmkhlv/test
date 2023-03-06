import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetcher } from 'helpers/fetcher';

import './index.css';

export function Profile() {
  const { userId } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://new-backend.unistory.app/api/data/id/${userId}`,
    fetcher
  );
  if (error)
    return (
      <div className="pl-[64px] pt-[64px] text-custom_xl">
        Data loading error
      </div>
    );
  if (isLoading)
    return <div className="pl-[64px] pt-[64px] text-custom_xl">Loading...</div>;
  return (
    <div className="relative mt-28 px-16 font-bold">
      <div className="mb-12 text-custom_xll_plus">Personal data</div>
      <div className="mb-0.5 text-custom_m uppercase font-bold">Name</div>
      <div className="mb-5 text-custom_xl text-colorAccent">
        {data.username}
      </div>
      <div className="mb-0.5 text-custom_m">Email</div>
      <div className="mb-5 text-custom_xl text-colorAccent">{data.email}</div>
      <div className="mb-0.5 text-custom_m">Wallet</div>
      <div className="text-custom_xl text-colorAccent">{data.address}</div>
      <div className="pos-abs-coord w-[532px] h-[532px] multi-bg" />
    </div>
  );
}
