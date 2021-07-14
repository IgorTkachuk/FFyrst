export interface IListItem {
  label: string,
  link?: string,
  onClick?: () => void
}

export interface IHeaderProps {
  user: {
    firstName: string,
    lastName: string,
    linkToProfile: string,
    linkToAvatar: string,
  }
}
