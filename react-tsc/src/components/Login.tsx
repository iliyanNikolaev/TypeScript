import { useEffect, useState } from "react";

interface IUser {
  email: string,
  password: string
}

type LoggedUserType = IUser | null;

const checkSessionStorageForUser = (): LoggedUserType => {
  const userInSessionStorage: string | null = sessionStorage.getItem('ts-reactDemoUser');
  if (userInSessionStorage) return JSON.parse(userInSessionStorage);
  return null;
}

export const Login = () => {
  const [loggedUser, setLoggedUser] = useState<LoggedUserType>(null);
  useEffect(() => {
    const isExist = checkSessionStorageForUser();
    setLoggedUser(isExist)
  }, []);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogoutHandler = () => {
    setLoggedUser(null);
    sessionStorage.removeItem('ts-reactDemoUser');
  }

  const onLoginHandler = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    sessionStorage.setItem('ts-reactDemoUser', JSON.stringify({ email, password }));

    setLoggedUser({
      email: email || 'anonymous',
      password
    });

    setEmail('');
    setPassword('');
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }

  return (
    <section className="view-section">
      <h1>Login</h1>
      {loggedUser
        ? <>
          <p>you logged with {loggedUser.email}</p>
          <button onClick={onLogoutHandler}>Logout</button>
        </>
        : <form className="login-form" onSubmit={onLoginHandler}>
          <input type="email" name="email" placeholder="email" value={email} onChange={onEmailChange} />
          <input type="password" name="password" placeholder="password" value={password} onChange={onPasswordChange} />
          <button>Login</button>
        </form>}

    </section>
  )
}
