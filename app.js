const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const projetos = [
    {
        id: 1,
        nome: "Marketplace Local Santa Fé",
        tag: "Economia",
        descricao: "Plataforma integrada para conectar lojistas e consumidores da cidade, fortalecendo a economia local.",
        cor: "from-green-400 to-blue-500",
        cta: "Ver Plataforma",
        link: "https://santafe-market.vercel.app/"
    },
    {
        id: 2,
        nome: "Lugares Santa Fé do Sul",
        tag: "Guia Turístico",
        descricao: "O maior guia comercial e de lazer da região na palma da sua mão.",
        cor: "from-blue-500 to-indigo-600",
        cta: "Explorar Cidade",
        link: "https://lugaresantafedosul.com.br"
    },
    {
        id: 3,
        nome: "Venda no Mercado Livre",
        tag: "Oportunidade",
        descricao: "Transforme sua vida vendendo no maior marketplace da América Latina.",
        cor: "from-yellow-400 to-orange-500",
        cta: "Quero Começar",
        link: "https://curso-mercado-livre-2026.vercel.app/"
    },
    {
        id: 4,
        nome: "Telemedicina Pro",
        tag: "Saúde",
        descricao: "Consultas online com especialistas, unindo tecnologia e cuidado humano.",
        cor: "from-cyan-500 to-blue-700",
        cta: "Agendar Agora",
        link: "https://telemedicina-pro.vercel.app/"
    }
];

app.get('/', (req, res) => {
    res.render('index', { projetos });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});