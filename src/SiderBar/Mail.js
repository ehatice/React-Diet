import React, { useEffect, useState } from 'react';
import { Card, List, Button, message, Layout } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

const Mail = () => {
  const [sabahMeals, setSabahMeals] = useState([]);
  const [ogleMeals, setOgleMeals] = useState([]);
  const [aksamMeals, setAksamMeals] = useState([]);
  const [mailSent, setMailSent] = useState(false);

  useEffect(() => {
    const storedSabahMeals = localStorage.getItem('sabahMeals');
    if (storedSabahMeals) {
      setSabahMeals(JSON.parse(storedSabahMeals));
    }

    const storedOgleMeals = localStorage.getItem('ogleMeals');
    if (storedOgleMeals) {
      setOgleMeals(JSON.parse(storedOgleMeals));
    }

    const storedAksamMeals = localStorage.getItem('aksamMeals');
    if (storedAksamMeals) {
      setAksamMeals(JSON.parse(storedAksamMeals));
    }
  }, []);

  const handleSendMail = () => {

    setTimeout(() => {
      setMailSent(true);
      message.success('Mail başariyla gönderildi!');
    });
  };

  const renderMeals = (meals, title) => (
    <Card
      title={title}
      style={{ width: 500, marginTop: 16, textAlign: 'center' }} 
    >
      <List
        size="small"
        dataSource={meals}
        renderItem={(item) => (
          <List.Item>
            {item.name} - {item.calories} Kalori
          </List.Item>
        )}
      />
    </Card>
  );

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <Button type="primary" onClick={handleSendMail}>
            Mail Gönder
          </Button>
          
        </div>
        
        {renderMeals(sabahMeals, "Sabah Kahvaltısı")}
        {renderMeals(ogleMeals, "Öğle Yemeği")}
        {renderMeals(aksamMeals, "Akşam Yemeği")}
      </Content>
    </Layout>
  );
};

export default Mail;
