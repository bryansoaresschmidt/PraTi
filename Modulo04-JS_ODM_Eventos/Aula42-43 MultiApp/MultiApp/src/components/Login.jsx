import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  gap: 20px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding: 20px;
border-radius: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2 );
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user === 'admin' && password === '1234') {
      onLogin()
    } else {
      alert('Invalid credentials')
    }

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="NoobGamer69"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Login