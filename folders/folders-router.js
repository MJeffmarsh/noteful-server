const path = require('path');
const express = require('express');
const xss = require('xss');
const FoldersService = require('./notes-service');

const foldersRouter = express.Router();
const jsonParser = express.json();

function serializeFolder(folder) {
  return {
    id: folder.id,
    title: xss(folder.title)
  };
}
