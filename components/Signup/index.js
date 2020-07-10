import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/user/action";
import { selectToken } from "../../redux/user/selector";
import { selectUser } from "../../redux/user/selector";
import Router from "next/router";

const SignupUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  if (user.email !== null) {
    Router.back();
  }

  useEffect(() => {
    if (token !== null) {
      Router.push("/signup");
    }
  }, [token, Router]);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name:{" "}
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
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
          <button type="submit">Register</button>
        </p>
      </form>
    </div>
  );
};

export default connect(null, null)(SignupUser);
