const express = require ('express');//Manejo de rutas y solicitudes http
const cors = require('cors');//Permitir que tu frontend React haga peticiones al backend

const app = express();//Instanciamos el servidor
app.use(cors());//Activamos el CORS para todas las rutas
app.use(express.json());//Permite que el servidor entienda peticiones que se envían en JSON

const PORT = 5000; 

//Ruta para calcular

app.post('/calculate',(req,res) =>{
    const { expression } = req.body;

    try {
        
        let result = expression
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)') // √9 -> Math.sqrt(9)
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log(');
        let output = eval(result);

        if(typeof output ==='number' && !Number,isInteger(output)){
            output = parseFloat(output.toFixed(4));
        }
        res.json({result:output});
    }catch (err){
        res.status(400).json({error:'Expresión inválida'});
    }
});


app.listen(PORT,()=>{
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});