require('dotenv').config();
var queue = require('../queue');
const bin = require('../util/bin');
const { CompoundView } = require('../models/compoundView');
const fs = require('fs');
const path = require('path');

// see https://github.com/OptimalBits/bull
queue.processDockingJob(function(job, done) {
  console.log(`processing job ${job.data.jobId} (cid: ${job.data.ligandCid})`);

  CompoundView.findOne({
    cid: job.data.ligandCid,
  }).then(ligand => {
    var dir = bin.tmpDir();

    const inputFilePdbqt = path.join(dir, 'input.pdbqt');
    fs.writeFileSync(inputFilePdbqt, job.data.receptor, 'utf-8');

    const ligandDir = path.join(dir, 'ligands');
    fs.mkdirSync(ligandDir);

    const ligandFile = path.join(ligandDir, `${ligand.cid}.smi`);
    const ligandFilePdbqt = path.join(ligandDir, `${ligand.cid}.pdbqt`);
    fs.writeFileSync(ligandFile, ligand.smiles_isomeric, 'utf-8');
    bin.smiToPdbqt('smi', ligandFile, 'pdbqt', ligandFilePdbqt);

    const outputDir = path.join(dir, 'output');
    const log = bin.idock(inputFilePdbqt, ligandDir, outputDir);
    done(null, { log: log.toString('utf8') });
  });
});

console.log('started shchem worker');
