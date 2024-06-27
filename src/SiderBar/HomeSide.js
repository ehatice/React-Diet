import React, { useState } from 'react';
import { Button, Form, InputNumber, Radio, message } from 'antd';

function HomeSide({ setCaloriesValue, caloriesValue }) {
  const [form] = Form.useForm();
  const [bmi, setBmi] = useState(null);

  const BmiHesapla = () => {
    form.validateFields()
      .then(values => {
        const { kilo, boy } = values;
        if (kilo && boy) {
          const heightInMeters = boy / 100;
          const bmiValue = (kilo / (heightInMeters * heightInMeters)).toFixed(2);
          setBmi(bmiValue);

          if (bmiValue < 18) {
            setCaloriesValue(2500); 
          } else if (bmiValue >= 18 && bmiValue <= 30) {
            setCaloriesValue(2000); 
          } else {
            setCaloriesValue(1600); 
          }
        } else {
          message.error('Lütfen kilonuzu ve boyunuzu giriniz');
        }
      })
      .catch(errorInfo => {
        console.error('Validation Failed:', errorInfo);
      });
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
          margin: '0 auto', 
          textAlign: 'center', 
        }}
      >
        <Form.Item label="Cinsiyet" name="cinsiyet" rules={[{ required: true, message: 'Lütfen cinsiyetinizi seçiniz' }]}>
          <Radio.Group>
            <Radio value="Kadin"> Kadin </Radio>
            <Radio value="erkek"> Erkek </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Kilonuz" name="kilo" rules={[{ required: true, message: 'Lütfen kilonuzu giriniz' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Boyunuz" name="boy" rules={[{ required: true, message: 'Lütfen boyunuzu giriniz' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Yaşınız" name="yas">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 14,
          }}
        >
          <Button type="primary" onClick={BmiHesapla}>Hesapla</Button>
        </Form.Item>
      </Form>
      {bmi !== null && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <h3>Vücut Kütle İndeksiniz: {bmi}</h3>
          <h3>Günlük almaniz gereken kalori: {caloriesValue}</h3>
        </div>
      )}
    </>
  );
}

export default HomeSide;
