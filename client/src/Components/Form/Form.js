import React from "react";

const Form = props => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("we are in handlesubmit", name, email);
    fetch("http://localhost:3000/send", {
      method: "post",
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`
      })
    })
      .then(response => response.json())
      .then(json => console.log("handleSubmit: ", json));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input
          name='ReceiverName'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        email
        <input
          name='ReceiverEmail'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export { Form };
