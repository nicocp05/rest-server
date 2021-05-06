import express, { Application } from 'express';
import cors from 'cors';
import userRouter from '../routes/user.routes';

export class Server {

    private app: Application;
    private port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    }

    middlewares() {

        this.app.use(cors());
        
        this.app.use(express.json());
        
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use('/api/users', userRouter);

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }

}