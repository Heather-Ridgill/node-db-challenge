const express = require(`express`);
const projectRouter = require ("./projects/projects-router");
const taskRouter = require ("./tasks/tasks-router");
const resourceRouter = require ("./resources/resources-router");

const server = express();


server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use ("/api/resources", resourceRouter);

module.exports = server;