const Classroom = require('../models').Classroom;
const Student = require('../models').Student;

module.exports = {
  list(req, res) {
    return Classroom
      .findAll({
        include: [{
          model: Student,
          as: 'students'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Student, as: 'students' }, 'createdAt', 'DESC'],
        ],
      })
      .then((classrooms) => res.status(200).send(classrooms))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Classroom
      .findById(req.params.id, {
        include: [{
          model: Student,
          as: 'students'
        }],
      })
      .then((classroom) => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return res.status(200).send(classroom);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Classroom
      .create({
        class_name: req.body.class_name,
      })
      .then((classroom) => res.status(201).send(classroom))
      .catch((error) => res.status(400).send(error));
  },

  addWithStudents(req, res) {
    return Classroom
      .create({
        class_name: req.body.class_name,
        students: req.body.students,
      }, {
      	include: [{
          model: Student,
          as: 'students'
        }]
      })
      .then((classroom) => res.status(201).send(classroom))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Classroom
      .findById(req.params.id, {
        include: [{
          model: Student,
          as: 'students'
        }],
      })
      .then(classroom => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .update({
            class_name: req.body.class_name || classroom.class_name,
          })
          .then(() => res.status(200).send(classroom))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Classroom
      .findById(req.params.id)
      .then(classroom => {
        if (!classroom) {
          return res.status(400).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
