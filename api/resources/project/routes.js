/**
 * Created by enejl on 15. 06. 2016.
 */
const server    = require('../../server').server;
const mongoose  = require('mongoose');

module.exports = function(){

    server.get('/projects', function(){

        const Project = mongoose.model('Project');

        Project.find(function(err, docs){

            res.send(docs);

        });

    });

    server.post('/project', (req,res)=>{

        const data = req.body;

        const Project = mongoose.model('Project');

        const newProject = new Project(data);

        newProject.save(function(){

            res.send(newProject);

        });

    });

    server.delete('/project/:id', (req,res)=>{

        const projectId = req.params.id;

        const Project = mongoose.model('Project');

        Project.findByIdAndRemove(projectId, function(err, doc){

            if(!err) {
                res.send(doc);
            }else{
                res.status(400).send(err);
            }

        });

    });

    server.put('/project/:id', (req,res)=>{

        const projectId = req.params.id;
        const projectData = req.body;

        Project.findByIdAndUpdate(projectId, projectData, { new:true }, function(err, doc){

            if(!err) {
                res.send(doc);
            }else{
                res.status(400).send(err);
            }

        });

    });

};



















