export interface MeetingContextType {
  partner: PartnerType[] | null;
  setPartner: React.Dispatch<React.SetStateAction<PartnerType[]>>;
}

export interface PartnerType {
  userIdx: number;
  department: string;
  name: string;
  MBTI: string;
  description: string;
}
