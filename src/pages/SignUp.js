export const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
