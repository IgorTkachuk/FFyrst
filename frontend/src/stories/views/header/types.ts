export interface IListItem {
  label: string,
  link?: string,
  onClick?: () => void
}

export interface IHeaderUser {
  firstName: string,
  lastName: string,
  linkToProfile: string,
  linkToAvatar: string,
}
