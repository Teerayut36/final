var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-54-243-147-162.compute-1.amazonaws.com',
  user     : 'mqvvplpgwkwaww',
  password : 'bbe283a5d4ce86d696c0794bfca51f66630f8553225b83bff3880b169880250a',
  database : 'ddhq6akm6qbbtp'
});