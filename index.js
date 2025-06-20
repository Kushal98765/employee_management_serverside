import cors from 'cors';
import express from "express";
import connectToDatabase from './db/db.js';
import authRouter from './routes/auth.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js';
import leaveRouter from './routes/leave.js';
import salaryRouter from './routes/salary.js';
import settingRouter from './routes/setting.js';
import dashboardRouter from './routes/dashboard.js';
import attendenceRouter from './routes/attendence.js';
import serverless from 'serverless-http';


await connectToDatabase();

const app = express();

app.use(cors({
    origin: "https://employee-management-frontend-eta-eight.vercel.app",
    credentials: true,
}
))
app.use(express.json())
app.use(express.static('public/uploads'))

app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter);
app.use('/api/attendence', attendenceRouter);
app.use('/api/dashboard', dashboardRouter);


export const handler = serverless(app);