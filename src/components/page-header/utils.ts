import { AppRoute } from '../../const';

export const shoudRenderUserProfile = (pathname: string): boolean => {
  switch (pathname) {
    case AppRoute.Login:
      return true;
  }

  return false;
};
