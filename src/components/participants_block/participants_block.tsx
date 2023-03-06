import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

import { fetcher } from 'helpers/fetcher';
import { Participant } from 'helpers/interfaces';
import './index.css';

export function ParticipantsBlock() {
  const { data, error, isLoading } = useSWR(
    'https://new-backend.unistory.app/api/data?page=0&perPage=40',
    fetcher
  );
  const navigate = useNavigate();
  const listParticipants = data?.items.map((participant: Participant) => (
    <tr
      onClick={() => {
        navigate(`/profile/${participant.id}`);
      }}
      className="flex justify-start border-b w-[100%]"
      key={participant.id}
    >
      <td className="w-[167px] mr-[20px] overflow-hidden text-ellipsis py-4 text-custom_table font-AvenirNextCyr">
        {participant.username}
      </td>
      <td className="block w-[238px] mr-[20px] overflow-hidden text-ellipsis text-custom_table py-4 font-AvenirNextCyr">
        {participant.email}
      </td>
      <td className="w-[223px] pr-3 overflow-hidden text-ellipsis  text-custom_table py-4 font-AvenirNextCyr">
        {participant.address}
      </td>
    </tr>
  ));

  if (error)
    return (
      <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
        Data loading error
      </div>
    );
  if (isLoading)
    return (
      <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
        Loading...
      </div>
    );
  return (
    <div>
      <h3 className="mb-[36px] text-custom_xll font-bold">
        Participation listing (enable only for participants)
      </h3>
      <table className="w-[668px] mr-[27px]">
        <thead>
          <tr className="block border-b w-[100%]">
            <th className="w-[187px] pb-4 text-custom_m font-bold text-start">
              Name
            </th>
            <th className="w-[258px] pb-4 text-custom_m font-bold text-start">
              Email
            </th>
            <th className=" pb-4 text-custom_m font-bold text-start">Wallet</th>
          </tr>
        </thead>
      </table>
      <div className="max-h-[550px] overflow-auto scroll">
        <table className="w-[668px] mr-[27px]">
          <tbody>{listParticipants}</tbody>
        </table>
      </div>
    </div>
  );
}