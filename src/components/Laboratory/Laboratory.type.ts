interface LaboratoryItem {
  laboratoryID: string;
  laboratoryName: string;
  avatarUrl: string;
  nickName: string;
  resourceNum: number;
}
interface LaboratoryDetail extends LaboratoryItem {
  otherPeople: Array<string>;
  laboratoryDetail: string;
}
export { LaboratoryItem, LaboratoryDetail };
