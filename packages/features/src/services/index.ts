import { api } from 'k2-portal';

export async function getSummary(id: string) {
  return api.graphql.get(`/namespaces/bcf/data_frame?query=`);
}
