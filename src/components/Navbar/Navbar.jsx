import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import { menuItems } from './options';

import { Header, Nav, List, Item, ItemLink } from './Navbar.styled';

export default function Navbar({ children }) {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header>
        <Nav>
          <List>
            <>
              {!user.uid ? (
                menuItems.map(item => (
                  <Item key={item.id}>
                    <Link href={item?.link} legacyBehavior>
                      <ItemLink
                        className={router.pathname === item?.link ? 'active' : ''}
                      >
                        {item?.name}
                      </ItemLink>
                    </Link>
                  </Item>
                ))
              ) : (
                <>
                  <Item>
                    <Link href="/" legacyBehavior>
                      <ItemLink className={router.pathname === '/' ? 'active' : ''}>
                        Home
                      </ItemLink>
                    </Link>
                  </Item>
                  <Item>
                    <ItemLink onClick={handleLogout}>Logout</ItemLink>
                  </Item>
                </>
              )}
            </>
          </List>
        </Nav>
      </Header>
      {children}
    </>
  );
}
