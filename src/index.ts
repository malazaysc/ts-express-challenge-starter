import express, { Request, Response } from 'express';

const app: express.Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
export { server };
