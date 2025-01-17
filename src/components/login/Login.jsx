import React, { useState, useEffect } from 'react';
import { Input, Button, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {   const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/product');
    }
  }, [navigate]);

  const generateToken = () => {
    return crypto.randomUUID(); 
  };

  const handleLogin = () => {
    const defaultUsername = 'Azamjon';
    const defaultPassword = 'Azamjon7777';

    if (username === defaultUsername && password === defaultPassword) {
      const token = generateToken(); 
      localStorage.setItem('authToken', token); 
      message.success('Tizimga kirildi!');
      navigate('/product');
    } else {
      message.error('Foydalanuchi nomi yoki parolda hatolik');
    }
  };

  return (
    <div className='login' style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Admin Tizimga Kirish</h2>
      <Form
        layout="vertical"
        onFinish={handleLogin}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Form.Item
          label="Foydalanuchi nomi"
          name="username"
          rules={[{ required: true, message: 'Iltimos foydalanuvchi nomini kiriting!' }]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Foydalanuchi nomini kiriting"
          />
        </Form.Item>

        <Form.Item
          label="Parol"
          name="password"
          rules={[{ required: true, message: 'Iltimos foydalanuvchi parolini kiriting!!' }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parolni kiriting"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Tizimga Kirish
        </Button>
      </Form>
    </div>
  );
}
