import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FC } from 'react';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];
const Navbar: FC = () => {
  const { pathname } = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/next.svg' width='60' height='60' alt='Next'/>
      </div>
      <div className={styles.links}>
        {
          navigation.map((link) => (
            <Link href={link.path} key={link.id} className={pathname === link.path ? styles.active : null}>{link.title}</Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar