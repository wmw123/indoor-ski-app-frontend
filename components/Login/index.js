import React, { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/action";
import { selectToken } from "../../redux/user/selector";
import Router from "next/router";
import { selectUser } from "../../redux/user/selector";

const LoginUser = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  if (user.email !== null) {
    Router.back();
  }

  useEffect(() => {
    if (token !== null) {
      Router.push("/login");
    }
  }, [token, Router]);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
      <Link href="/signup">
        <a title="Sign up">Click here to sign up</a>
      </Link>
    </div>
  );
};

export default connect(null, null)(LoginUser);
