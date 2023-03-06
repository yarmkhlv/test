import useSWR from 'swr';

import { fetcher } from 'helpers/fetcher';
import { Participant } from 'helpers/interfaces';
import './index.css';

export function ParticipantsBlock() {
  const { data, error, isLoading } = useSWR(
    'https://new-backend.unistory.app/api/data?page=0&perPage=40',
    fetcher
  );
  const listParticipants = data
    ? data.items.map((participant: Participant) => (
        <tr className="border-b" key={participant.id}>
          <td className="py-4">{participant.username}</td>
          <td className="py-4">{participant.email}</td>
          <td className="py-4">{`${participant.address.slice(0, 24)}...`}</td>
        </tr>
      ))
    : null;

  if (error)
    return (
      <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
        Ошибка загрузки
      </div>
    );
  if (isLoading)
    return (
      <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
        Загрузка...
      </div>
    );
  return (
    <div>
      <h3 className="mb-[36px] text-custom_xll font-bold">
        Participation listing (enable only for participants)
      </h3>
      <table className="w-[641px] mr-[27px]">
        <thead>
          <tr className="border-b">
            <th className="pr-3 pb-4 text-custom_m font-bold text-start">
              Name
            </th>
            <th className="pr-3 pb-4 text-custom_m font-bold text-start">
              Email
            </th>
            <th className="pr-3 pb-4 text-custom_m font-bold text-start">
              Wallet
            </th>
          </tr>
        </thead>
      </table>
      <div className="max-h-[550px] overflow-auto scroll">
        <table className="w-[641px] mr-[27px]">
          <tbody>{listParticipants}</tbody>
        </table>
      </div>
    </div>
  );
}
