const db = require("../data/db.config");

function getProjects() {
  return db.select("*").from("projects");
}

function getProjectsById(id) {
  return db
    .select("*")
    .from("projects")
    .where({ id });
}

function addProjects(body) {
  return db
    .insert(body)
    .into("projects")
    .then(res => {
      const id = res[0];
      return db
        .select("*")
        .from("projects")
        .where({ id });
    });
}

module.exports = {
  getProjectsById,
  getProjects,
  addProjects
};