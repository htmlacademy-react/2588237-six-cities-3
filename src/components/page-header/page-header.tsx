import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import UserProfile from '../user-profile/user-profile';
import { shoudRenderUserProfile } from './utils';

type PageHeaderProps = {
  isAuth: boolean;
}

function PageHeader({isAuth}: PageHeaderProps): JSX.Element {
  const {pathname} = useLocation();

  const shoudRender = shoudRenderUserProfile(pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          {!shoudRender && <UserProfile isAuth={isAuth} />}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
