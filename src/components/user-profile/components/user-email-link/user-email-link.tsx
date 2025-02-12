import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';

type UserEmailLinkProps = {
  email: string;
  favoritesCount: number;
}

function UserEmailLink({email, favoritesCount}: UserEmailLinkProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>

        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </Link>
    </li>
  );
}

export default UserEmailLink;
