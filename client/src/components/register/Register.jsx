import "./Register.css";
export default function Register() {
  return (
    <>
      <form id="register-form">
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
          <button id="register-btn">Register</button>
        </div>
      </form>
    </>
  );
}
