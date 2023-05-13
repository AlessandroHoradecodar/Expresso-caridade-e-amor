const express = require('express');
const app = express();
const contatoRoutes = express.Router();

let Contato = require('../model/Contato');

// api to add contato
contatoRoutes.route('/add').post(function (req, res) {
  let contato = new Contato(req.body);
  contato.save()
  .then(contato => {
    res.status(200).json({'status': 'success','mssg': 'contato added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get corretores
contatoRoutes.route('/').get(function (req, res) {
  Contato.find(function (err, corretores){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','corretores': corretores});
    }
  });
});

// api to get contato
contatoRoutes.route('/contato/:id').get(function (req, res) {
  let id = req.params.id;
  Contato.findById(id, function (err, contato){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','contato': contato});
    }
  });
});

// api to update route
contatoRoutes.route('/update/:id').put(function (req, res) {
    Contato.findById(req.params.id, function(err, contato) {
    if (!contato){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        contato.name = req.body.name;
        contato.email = req.body.email;
        contato.message = req.body.message;

        contato.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
contatoRoutes.route('/delete/:id').delete(function (req, res) {
  Contato.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = contatoRoutes;