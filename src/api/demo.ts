import { methodPost, methodGet } from "@/api/index";

export const getDemoLists = (params) => methodGet('/demo/getLists', params); // 需量分析-表格数据
