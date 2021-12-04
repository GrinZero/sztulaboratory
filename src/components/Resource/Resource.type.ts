interface Resource {
  id: string;
  laboratoryID: string | null;
  name: string;
  type: string;
  totalNum: number;
  remainNum: number;
  company: string;
  resourceDetail: string;
  iconPath?: string;
  key: string;
}
interface ResourceTable {
  pagination: any;
  activeSource: Array<Resource>;
  source: Array<Array<Resource>>;
}
interface ResourceFormItem {
  company: Array<string>;
  type: Array<string>;
}
export { Resource, ResourceTable, ResourceFormItem };
