import React, { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const defaultUsername = 'admin';
    const defaultPassword = 'admin123';

    if (username === defaultUsername && password === defaultPassword) {
      const token = 'adwwadwadw';  // This could be any token you generate or get from an API
      localStorage.setItem('authToken', token);
      message.success('Login successful!');
      navigate('/product');
    } else {
      message.error('Incorrect username or password');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <Form
        layout="vertical"
        onFinish={handleLogin}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter username"
          />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
}
