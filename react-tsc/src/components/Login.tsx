
export const Login = () => {
  
  const onLoginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('login')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <section className="view-section">
        <h1>Login</h1>
        <form className="login-form">
            <input type="email" name="email" placeholder="email" onChange={onChange} />
            <input type="password" name="password" placeholder="password" onChange={onChange} />
            <button onClick={onLoginHandler}>Login</button>
        </form>
    </section>
  )
}
