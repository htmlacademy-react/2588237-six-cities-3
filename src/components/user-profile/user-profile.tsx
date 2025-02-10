import SignInLink from './components/sign-in-link/sign-in-link';
import SignOutLink from './components/sign-out-link/sign-out-link';
import UserEmailLink from './components/user-email-link/user-email-link';

type UserProfileProps = {
  isAuth: boolean;
}

const UserSettings = {
  email: 'Oliver.conner@gmail.com',
  favoritesCount: 3,
};

function UserProfile({isAuth}: UserProfileProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && <UserEmailLink email={UserSettings.email} favoritesCount={UserSettings.favoritesCount} />}

        {!isAuth && <SignInLink />}

        {isAuth && <SignOutLink />}
      </ul>
    </nav>
  );
}

export default UserProfile;
