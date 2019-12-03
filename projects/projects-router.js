const express = require(`express`);

const Projects = require(`../projects/projects-helper`);

const router = express.Router();

router.get(`/`, (req, res) => { 
    Projects.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: `Failed to get projects`});
    });
});

router.get(`/:id`, (req, res) => {
    const { id } = req.params;

    Projects.getProjectsById(id)
    .then(projects => {
        if (projects) {
            res.json(projects);
        } else {
            res.status(404).json({ message: `Whoops you must have the wrong id`});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to projects"});
    });
});

router.post(`/`, (req,res) => {
const projData = req.body;
Projects.addProjects(projData)
.then(project => {
    res.status(201).json(project);
})
.catch(err => {
    res.status(500),json({ message: `Failed to create a new project`});
});
});

router.put(`/:id`, (req,res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.getProjectsById(id)
    .then(projects => {
        if (projects) {
            Projects.update(changes, id)
            .then(updatedProject => {
                res.json(updatedProject);
            });
        }else {
            res.status (404).json({ message: `Could not find the project with given id`});
        }
    })
    .catch(err => {
        res.status(500).json({ message: `Sorry, Failed to update this project`});
    });
});

router.delete(`/:id`, (req,res) => {
    const { id } = req.params;

    Projects.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json ({ removed: deleted});
        }else{
            res.status (404).json({ message:`Could not find project with given id`});
        }
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to delete this project`});
    });
});

module.exports = router;