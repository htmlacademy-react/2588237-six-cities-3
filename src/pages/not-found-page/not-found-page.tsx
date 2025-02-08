import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';

type NotFoundPageProps = {
  isAuth: boolean;

}
function NotFoundPage({isAuth}: NotFoundPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>

      {<PageHeader isAuth={isAuth} />}

      <main className="page__main page__main--index">
        <div style={{margin: '10% auto', textAlign: 'center'}}>
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
