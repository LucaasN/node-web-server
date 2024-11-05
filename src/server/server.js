import express from 'express';
import path from 'path';

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;
   
    const app = express();

    //Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)); //contenido estatico que tenemos disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    });

    app.listen(port, ()=>{
        console.log(`Escuchando en port ${port}: http://localhost:3000/`);
    })

}