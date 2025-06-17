"use client"
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

import styles from './Navbar.module.css';

const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

export const Navbar = () => {
  const currentPath = usePathname()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/"><img src="/shared/logo.svg" alt="" /> GALACTICA</a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
      
        {/*done*/}
          {/* <NavItem title="01 ABOUT US" link={navbarItems[0].link} isActive={navbarItems[0].link === currentPath} />
          <NavItem title="02 DESTINATION" link={navbarItems[1].link} isActive={navbarItems[1].link === currentPath} />
          <NavItem title="03 NASA COLLABORATION" link={navbarItems[2].link} isActive={navbarItems[2].link === currentPath} /> */}
          
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
            {navbarItems?.map((item, index) => (
              <NavItem key={index} title={`0${index+1} ${item?.title}`} link={item?.link} isActive={item?.link === currentPath}/>
            ))}
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ title, link, isActive }) {
  return (
    <li className={classNames(styles.navbarLinks, {
      [styles.isLinkActive]: isActive,
    })}>
      <Link href={link}>{title}</Link>
    </li>
  );
}