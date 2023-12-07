import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Gabung = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Gabung = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      // Setelah berhasil mendaftar, navigasi ke halaman login
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered"></div>
          <div className="column is-4-desktop"></div>

          <form onSubmit={Gabung} className="box">
            <p className="has-text-centered"> {msg} </p>
            <div className="field mt-5 ">
              <label className="label">Name</label>
              <div className="controls">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field mt-5">
              <label className="label">Email</label>
              <div className="controls">
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field mt-5">
              <label className="label">Password</label>
              <div className="controls">
                <input
                  type="password"
                  className="input"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="field mt-5">
              <label className="label">Confirm Password</label>
              <div className="controls">
                <input
                  type="password"
                  className="input"
                  placeholder="********"
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="field mt-5">
              <button className="button is-success is-fullwidth">Gabung</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Gabung;
