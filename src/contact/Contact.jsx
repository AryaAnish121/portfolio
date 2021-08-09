import React, { useState } from 'react';
import CirclePattern from '../images/circle-pattern.png';
import TrianglePattern from '../images/triangle-pattern.png';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MessageIcon from '@material-ui/icons/Message';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSumbit = () => {
    if (
      data.name.trim() !== '' &&
      data.email.trim() !== '' &&
      data.message.trim() !== ''
    ) {
      fetch(
        'https://arya-portfolio-contact-form-default-rtdb.firebaseio.com/contact.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
        .then((data) => {
          if (data) {
            setData({
              name: '',
              email: '',
              message: '',
            });
            alert('Success');
          }
        })
        .catch((err) => {
          alert('There was an error');
        });
    } else {
      alert('Please fill all the data');
    }
  };

  return (
    <div className="contact">
      <img src={CirclePattern} alt="pattern" className="circle-pattern" />
      <img src={CirclePattern} alt="pattern" className="circle-pattern-2" />
      <img src={TrianglePattern} alt="pattern" className="triangle-pattern" />
      <div className="contact-content">
        <h1>GET IN TOUCH</h1>
        <div className="contact-input">
          <PersonIcon className={data.name !== '' ? 'none' : ''} />
          <input
            type="text"
            placeholder="NAME"
            onChange={handleChange}
            name="name"
            value={data.name}
          />
        </div>
        <div className="contact-input">
          <AlternateEmailIcon className={data.email !== '' ? 'none' : ''} />
          <input
            type="email"
            placeholder="EMAIL"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
        </div>
        <div className="contact-input message">
          <MessageIcon className={data.message !== '' ? 'none' : ''} />
          <textarea
            type="text"
            placeholder="MESSAGE"
            onChange={handleChange}
            name="message"
            value={data.message}
          />
        </div>
        <button onClick={handleSumbit}>SUMBIT</button>
      </div>
    </div>
  );
};

export default Contact;
