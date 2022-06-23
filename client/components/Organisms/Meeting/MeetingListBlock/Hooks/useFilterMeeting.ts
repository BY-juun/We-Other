import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { filterCapacity, filterSex } from "store/meeting";
import { MeetingType } from "Types/Meeting";
import { useGetMeetingList } from "Hooks/Meeting";

const useFilterMeeting = () => {
  const { data: MeetingList } = useGetMeetingList();

  const capacity = useRecoilValue(filterCapacity);
  const sex = useRecoilValue(filterSex);
  const [meeting, setMeeting] = useState(MeetingList);

  useEffect(() => {
    let temp = [...(MeetingList as MeetingType[])];
    if (capacity !== 0) temp = temp?.filter((m) => m.capacity === capacity);
    if (sex !== "전체") temp = temp?.filter((m) => m.sexInfo === sex);
    setMeeting(temp);
  }, [capacity, sex]);
  return meeting;
};

export default useFilterMeeting;
