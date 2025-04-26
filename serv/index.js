require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(express.json());
app.use(cors());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/api/register', async (req, res)  => {
    console.log('Полученные данные:', req.body);

    try {
        const { name, phone, email, password } = req.body;

        if (!name || !phone || !email || !password) {
            return res.status(400).json({ error: 'Все поля обязательны.' });
        }

        const { data, error } = await supabase
            .from('users')
            .insert([{ name, phone, email, password }]);

            if (error) {
                throw new Error(error.message);
            }
            
                res.status(201).json({ message: 'Пользователь успешно зарегистрирован!', data });
            } catch (err)
            {
                console.error('Ошибка при регистрации:', err.message); // Проверяем ошибку
                res.status(500).json({ error: err.message });          
            };
})

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email);

        if (error) {
            throw new Error(error.message);
        }

        if (!users || users.length == 0) {
            return res.status(401).json({ error: 'Пользователь с таким email не найден.' });
        }

        const user = users[0];

        if (user.password !== password) {
            return res.status(401).json({ error: 'Неверный пароль.' });
        }

        return res.status(200).json({ 
            message: 'Вход выполнен успешно!', 
            user: { id: user.id, email: user.email }
        });

    } catch (error) {
        console.error('Ошибка при входе:', error);
        return res.status(500).json({ error: 'Ошибка сервера при авторизации' });
    }
});

app.post('/api/record', async (req, res)  => {
    console.log('Полученные данные:', req.body);

    try {
        const { name, phone, doctor, service, date } = req.body;

        if (!name || !phone || !doctor || !service || !date) {
            return res.status(400).json({ error: 'Все поля обязательны.' });
        }

        const { data, error } = await supabase
            .from('record')
            .insert([{ name, phone, doctor, service, date }]);

            if (error) {
                throw new Error(error.message);
            }
            
                res.status(201).json({ message: 'Вы успешно записались на прием! Если вы не придете на прием, то с вас спишется штраф 5000 рублей, удачи!!!', data });
            } catch (err)
            {
                console.error('Ошибка при записи:', err.message); // Проверяем ошибку
                res.status(500).json({ error: err.message });          
            };
})

const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log("Сервер запущен")
})


