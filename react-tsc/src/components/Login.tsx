import { useState } from "react";
export interface IUser {
  email: string,
  password: string
}

export const Login = () => {
  const [loggedUser, setLoggedUser] = useState<IUser | null>(() => {
    const userInSessionStorage = JSON.parse(sessionStorage.getItem('ts-reactDemoUser')!);
    if (userInSessionStorage) {
      return userInSessionStorage;
    }
    return null;
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogoutHandler = () => {
    setLoggedUser(null);
  }

  const onLoginHandler = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    sessionStorage.setItem('ts-reactDemoUser', JSON.stringify({ email, password }));

    setLoggedUser({
      email,
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
