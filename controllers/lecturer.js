const Lecturer = require('../models').Lecturer;
const Course = require('../models').Course;

module.exports = {
  list(req, res) {
    return Lecturer
      .findAll({
        include: [{
          model: Course,
          as: 'course'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Course, as: 'course' }, 'createdAt', 'DESC'],
        ],
      })
      .then((lecturers) => res.status(200).send(lecturers))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Lecturer
      .findById(req.params.id, {
        include: [{
          model: Course,
          as: 'course'
        }],
      })
      .then((lecturer) => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return res.status(200).send(lecturer);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Lecturer
      .create({
        lecturer_name: req.body.lecturer_name,
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },

  addWithCourse(req, res) {
    return Lecturer
      .create({
        lecturer_name: req.body.lecturer_name,
        course: req.body.course
      }, {
        include: [{
          model: Course,
          as: 'course'
        }]
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Lecturer
      .findById(req.params.id, {
        include: [{
          model: Course,
          as: 'course'
        }],
      })
      .then(lecturer => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .update({
            lecturer_name: req.body.lecturer_name || classroom.lecturer_name,
          })
          .then(() => res.status(200).send(lecturer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Lecturer
      .findById(req.params.id)
      .then(lecturer => {
        if (!lecturer) {
          return res.status(400).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
