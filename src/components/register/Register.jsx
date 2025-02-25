export default function Register() {
  return (
    <>
      <form method="POST">
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" name="password" />
          </label>
        </div>
        <div>
          <label htmlFor="rePassword">
            Confirm Password:
            <input type="rePassword" id="rePassword" name="rePassword" />
          </label>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </>
  );
}
