import Logo from '../logo/logo';
import UserProfile from '../user-profile/user-profile';

type PageHeaderProps = {
  isAuth: boolean;
}

function PageHeader({isAuth}: PageHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>

          {isAuth && <UserProfile />}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
