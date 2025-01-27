import UserNav from '../user-nav/user-nav';

type PageHeaderProps = {
  isAuth: boolean;
}

function PageHeader({isAuth}: PageHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

          </div>

          {isAuth && <UserNav />}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
