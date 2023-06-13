const express = require('express');
const app = express();
const cors = require('cors');

const words = require('./words/uzb-eng.json');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
});


app.get('/api/words', (req, res)=>{
    res.json(words);
});

app.get('/api/words/:name', async (req, res)=>{
    const word = await words.words.filter(item=>{
        return item.eng.indexOf(req.params.name.toLowerCase()) > -1;
    });
    if(word===[]) return res.status(404).json({"message":"Not found"});
    res.json(word);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})