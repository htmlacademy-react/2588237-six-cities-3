import PageHeader from '../../components/page-header/page-header';

function NotFoundPage(): JSX.Element {
  const isAuth = true;

  return (
    <div className="page page--gray page--main">
      {<PageHeader isAuth={isAuth} />}

      <main className="page__main page__main--index">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
