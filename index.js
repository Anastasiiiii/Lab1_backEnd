const express = require('express');
const fs = require('fs');
const hbs = require("hbs");
const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');

const products = ['Apple', 'Pen', 'Computer']

const port = 3000;

app.listen(port, () => {
    console.log('Server started');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
})

app.get('/weather', (req, res) => {
    res.sendFile(__dirname + '/weather.html');
})

app.get('/weather.css', (req, res) => {
    res.sendFile(__dirname + '/weather.css');
})


//Weather-info
/*
app.get('/weather/Zhytomyr', (req, res) => {
    res.render('weather.hbs', {
        title: 'Zhytomyr weather',
        message: 'Погода в місті Житомир',
        pressure: '764',
        humidity: '46',
        temperature: '16',
    });
});

app.get('/weather/Kyiv', (req, res) => {
    res.render('weather.hbs', {
        title: 'Kyiv weather',
        message: 'Погода в місті Київ',
        pressure: '764',
        humidity: '39',
        temperature: '17',
    });
});

app.get('/weather/Poltava', (req, res) => {
    res.render('weather.hbs', {
        title: 'Poltava weather',
        message: 'Погода в місті Полтава',
        pressure: '769',
        humidity: '51',
        temperature: '17',
    });
});

app.get('/weather/Sumy', (req, res) => {
    res.render('weather.hbs', {
        title: 'Sumy weather',
        message: 'Погода в місті Суми',
        pressure: '767',
        humidity: '43',
        temperature: '15',
    });
});*/
app.get('/weather/Zhytomyr', (req, res) => {
    fs.readFile('weather_info.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const weatherData = JSON.parse(data);
        const sumyWeather = weatherData.find(item => item.title === 'Zhytomyr weather');
        
        res.render('weather.hbs', {
            title: sumyWeather.title,
            message: sumyWeather.message,
            pressure: sumyWeather.pressure,
            humidity: sumyWeather.humidity,
            temperature: sumyWeather.temperature,
        });
    });
});
app.get('/weather/Kyiv', (req, res) => {
    fs.readFile('weather_info.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const weatherData = JSON.parse(data);
        const sumyWeather = weatherData.find(item => item.title === 'Kyiv weather');
        
        res.render('weather.hbs', {
            title: sumyWeather.title,
            message: sumyWeather.message,
            pressure: sumyWeather.pressure,
            humidity: sumyWeather.humidity,
            temperature: sumyWeather.temperature,
        });
    });
});
app.get('/weather/Poltava', (req, res) => {
    fs.readFile('weather_info.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const weatherData = JSON.parse(data);
        const sumyWeather = weatherData.find(item => item.title === 'Poltava weather');
        
        res.render('weather.hbs', {
            title: sumyWeather.title,
            message: sumyWeather.message,
            pressure: sumyWeather.pressure,
            humidity: sumyWeather.humidity,
            temperature: sumyWeather.temperature,
        });
    });
});
app.get('/weather/Sumy', (req, res) => {
    fs.readFile('weather_info.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const weatherData = JSON.parse(data);
        const sumyWeather = weatherData.find(item => item.title === 'Sumy weather');
        
        res.render('weather.hbs', {
            title: sumyWeather.title,
            message: sumyWeather.message,
            pressure: sumyWeather.pressure,
            humidity: sumyWeather.humidity,
            temperature: sumyWeather.temperature,
        });
    });
});
/*
app.get('/example', (req, res) => {
    const example = {
        title: 'Products',
        message: 'Products List',
        products: products
    };
    res.render('example.hbs', {example})
})
*/


