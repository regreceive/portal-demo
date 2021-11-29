import { api } from 'k2-portal';

/** 工况数据 */
export async function getSummary(id: string) {
  return api.gateway.get(`/mock/api/summary?id=${id}`);
}
