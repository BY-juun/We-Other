import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { filterCapacity, filterSex } from "store/meeting";
import { MeetingFilterWrapper } from "./styles";

interface Props {
  title: string;
  options: Array<option>;
}

type option = {
  text: string;
  value: number | string;
};

const MeetingFilter = ({ title, options }: Props) => {
  const setFilterCapacity = useSetRecoilState(filterCapacity);
  const setFilterSex = useSetRecoilState(filterSex);

  const onChangeSelector = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    if (title === "인원") setFilterCapacity(Number(e.target.value));
    else setFilterSex(e.target.value);
  }, []);

  return (
    <MeetingFilterWrapper>
      <span>{title}</span>
      <select onChange={onChangeSelector}>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </MeetingFilterWrapper>
  );
};

export default MeetingFilter;
