import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import valid from '../utils/valid'

const Register = () => {
  const initialState = { name: '', email: '', password:'', cf_password: ''}
  const [userData, setUserData] = useState(initialState)

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({...userData, [name]:value })
  }

  const { name, email, password, cf_password } = userData

  const handleSubmit = (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password )
    if(errMsg) console.log(errMsg)
  }



  return (
    <div>
      <Head>
        <title>Sign UP</title>
      </Head>

      <form className="mx-auto my-4 " style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <p className="my-2">
          Already have aacaunt?
          <Link href="/signin">
            <a style={{ color: "blue" }}> Sing Up</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
