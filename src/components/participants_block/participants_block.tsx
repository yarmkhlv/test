import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  getParticipants,
  removeUserFromParticipants,
} from 'store_toolkit/participants_slice';
import { increasePage } from 'store_toolkit/page_slice';

import { fetcher } from 'helpers/fetcher';
import { Participant, Store } from 'helpers/interfaces';
import { paramRequest } from 'helpers/const';
import './index.css';

export function ParticipantsBlock() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { participants, user, page } = useSelector((store: Store) => store);

  const { data, error } = useSWR(
    `https://new-backend.unistory.app/api/data?page=${page}&perPage=${paramRequest.perPage}`,
    fetcher
  );
  useEffect(() => {
    if (data && participants.length < 1) {
      dispatch(getParticipants([user, ...data.items]));
    } else if (
      data &&
      participants.every((elem) => elem.id !== data.items[0].id)
    ) {
      dispatch(getParticipants(data.items));
    }
  }, [data, dispatch]);

  const renderList = participants.map((participant: Participant) =>
    participant.id === '322solo' ? (
      <tr className="flex justify-start border-b w-[100%]" key={participant.id}>
        <td className="w-[167px] mr-[20px] overflow-hidden text-ellipsis py-4 text-custom_table font-AvenirNextCyr text-colorAccent">
          {participant.username}
        </td>
        <td className="block w-[238px] mr-[20px] overflow-hidden text-ellipsis text-custom_table py-4 font-AvenirNextCyr text-colorAccent">
          {participant.email}
        </td>
        <td className="w-[214px] pr-[19px] overflow-hidden text-ellipsis  text-custom_table py-4 font-AvenirNextCyr text-colorAccent">
          {participant.address}
        </td>
        <td className="flex items-center">
          <button
            onClick={() => {
              dispatch(removeUserFromParticipants(participant.id));
            }}
            className="btn-del-participant"
            type="button"
            aria-label="delete"
          />
        </td>
      </tr>
    ) : (
      <tr
        onClick={() => {
          navigate(`/profile/${participant.id}`);
        }}
        className="flex justify-start border-b w-[100%] cursor-pointer hover:bg-[#353544]"
        key={participant.id}
      >
        <td className="w-[167px] mr-[20px] overflow-hidden text-ellipsis py-4 text-custom_table font-AvenirNextCyr">
          {participant.username}
        </td>
        <td className="block w-[238px] mr-[20px] overflow-hidden text-ellipsis text-custom_table py-4 font-AvenirNextCyr">
          {participant.email}
        </td>
        <td className="w-[214px] pr-[19px] overflow-hidden text-ellipsis  text-custom_table py-4 font-AvenirNextCyr">
          {participant.address}
        </td>
      </tr>
    )
  );

  if (error)
    return (
      <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
        Data loading error
      </div>
    );

  if (participants.length > 0)
    return (
      <div>
        <h3 className="mb-[36px] text-custom_xll font-bold">
          Participation listing (enable only for participants)
        </h3>
        <table className="w-[671px] mr-[27px]">
          <thead>
            <tr className="block border-b w-[100%]">
              <th className="w-[187px] pb-4 text-custom_m font-bold text-start">
                Name
              </th>
              <th className="w-[258px] pb-4 text-custom_m font-bold text-start">
                Email
              </th>
              <th className=" pb-4 text-custom_m font-bold text-start">
                Wallet
              </th>
            </tr>
          </thead>
        </table>
        <div className=" max-h-[550px] overflow-auto scroll" id="forScroll">
          <InfiniteScroll
            scrollableTarget="forScroll"
            next={() => {
              if (page < paramRequest.maxPage) dispatch(increasePage());
            }}
            hasMore
            loader={
              <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
                Loading...
              </div>
            }
            dataLength={renderList.length}
          >
            <table className="w-[668px] mr-[27px]">
              <tbody>{renderList}</tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    );

  return (
    <div className="max-w-[500px] w-[100%] text-center text-custom_xl">
      Loading...
    </div>
  );
}
