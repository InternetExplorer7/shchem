const uuid = require('uuid');
const fetch = require('node-fetch');
const queue = require('../../../queue');
const bin = require('../../../util/bin');
const { CompoundView } = require('../../../models/compoundView');

module.exports.start = function(req, res) {
  const structure = req.params.structure;
  const url = `https://files.rcsb.org/download/${structure.toUpperCase()}.pdb`;
  fetch(url).then(function(fetchRes) {
    return fetchRes.buffer();
  }).then(function(buffer) {
    const pdb = buffer.toString();
    const pdbqt = bin.pdbToPdbqt(pdb);
    const jobId = uuid();
    CompoundView.findAll({ limit: 3 }).then(ligands => {
      Promise.all(ligands.map(ligand => {
        return queue.addDockingJob({
          jobId: jobId,
          pdbqt: pdbqt,
          ligandCid: ligand.cid,
        }, () => {});
      }));
      res.json({ jobId: jobId });
    });
  });
};

module.exports.showJob = function(req, res) {
};