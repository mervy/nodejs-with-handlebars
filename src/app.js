import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import exphbs from 'express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express();

// Configuração do mecanismo de visualização Handlebars
app.engine('hbs', exphbs.engine({
    defaultLayout: 'template',
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'views/partials'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets/img', express.static(path.join(__dirname, '../public/assets/img')));
app.use('/assets/css', express.static(path.join(__dirname, '../public/assets/css')));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' })
})

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' })
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
