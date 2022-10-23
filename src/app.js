import express from "express";

import TaskRoutes from './routes/tasks.routes';

const app = express();

app.set('port',process.env.PORT || 3000)

app.get('/' , (req,res) => {
    res.json({meessage: 'Hello World'})
})

app.use('/api/tasks',TaskRoutes)

export default app;