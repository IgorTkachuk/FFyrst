type Filter = 'all' | 'online' | 'offline'

export interface ISearchFilter {
  page: number,
  filter: Filter,
  search: string,
  limit: number
}
