type HostUserProps = {
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

function HostUser({user}: HostUserProps): JSX.Element {
  const {name, avatarUrl, isPro} = user;
  const proUserClassName = isPro ? 'offer__avatar-wrapper--pro' : '';

  return (
    <div className="offer__host-user user">
      <div className={`offer__avatar-wrapper ${proUserClassName} user__avatar-wrapper`}>
        <img className="offer__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
      </div>
      <span className="offer__user-name">{name}</span>
      {isPro &&
        <span className="offer__user-status">
          Pro
        </span>}
    </div>
  );
}

export default HostUser;
