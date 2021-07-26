import React, {ReactElement, useState} from 'react';

interface ITabsListProps {
  children: ReactElement[] | ReactElement
  classNames?: {
    navbar?: string,
    navItem?: string,
    navItemActive?: string,
    navItemPassive?: string,
  }
}

const TabsList = ({ children, classNames = {} }: ITabsListProps): ReactElement => {
  const [active, setActive] = useState(0);

  const defaultStyles = {
    navbar: 'flex bg-gray-100',
    navItem: 'py-2 px-3 sm:px-5 text-sm text-gray-500 cursor-pointer transition duration-300',
    navItemActive: 'bg-white',
    navItemPassive: 'hover:bg-gray-200'
  }
  const styles = Object.assign(defaultStyles, classNames)
  const childrenArr = Array.isArray(children) ? children : [children];

  return (
    <div className='tabs-list'>
      <nav className={styles.navbar}>
        {
          childrenArr.map((child, index) => (
            <div
              key={index.toString()}
              onClick={() => setActive(index)}
              className={`navItem ${styles.navItem} ${active === index ? styles.navItemActive : styles.navItemPassive}`}
            >
              {child.props.label}
            </div>
          ))
        }
      </nav>
      <div className='tabItem'>{ childrenArr[active] }</div>
    </div>
  )
}

export { TabsList }
