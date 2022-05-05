import { methodGet } from "../api/index";

export const getDemoLists = (params?: any) => methodGet('/demo/getLists', params); // 需量分析-表格数据
