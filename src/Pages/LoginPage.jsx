import React, { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(""); 
    
    const onFinish = async (values) => {
        const { username, password } = values;
        try {
            await signInWithEmailAndPassword(auth, username, password);
            navigate('/home');
        } catch (error) {
            setErrorMessage('Giriş başarisiz: Kullanici adi veya şifre yanliş.'); 
        }
    };


    return (
        <div className="LoginBack login-container">
            <div className="header">HedeFit</div>
            <div className="custom-form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className="login-form"
                >
                    <Form.Item
                        label="Kullanici Adi"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Kullanici Adini giriniz',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Sifre"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Sifrenizi giriniz',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {errorMessage && (
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Alert message={errorMessage} type="error" showIcon />
                        </Form.Item>
                    )}

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="buttonn" htmlType="submit">
                            Giris
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
