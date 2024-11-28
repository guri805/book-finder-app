/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('taskbook');


db.getCollection('books').insertMany([
  { 'heading': 'SOM', 'text': 'Mechanics of materials explained', 'field': 'Mechanical Engineering' },
  { 'heading': 'ED', 'text': 'Engineering design essentials', 'field': 'Mechanical Engineering' },
  { 'heading': 'TOM', 'text': 'Study of machine motion', 'field': 'Mechanical Engineering' },
  { 'heading': 'FM', 'text': 'Fluid behavior under forces', 'field': 'Civil/Mechanical Engineering' },
  { 'heading': 'TD', 'text': 'Basics of technical drawing', 'field': 'Multi-disciplinary' },
  { 'heading': 'EMF', 'text': 'Electrical magnetic principles', 'field': 'Electrical Engineering' },
  { 'heading': 'DSP', 'text': 'Signal processing techniques', 'field': 'Electronics & Communication Engineering' },
  { 'heading': 'HT', 'text': 'Heat transfer foundational concepts', 'field': 'Mechanical Engineering' },
  { 'heading': 'DSA', 'text': 'Algorithms and data structures', 'field': 'Computer Science Engineering' },
  { 'heading': 'OS', 'text': 'Operating system principles', 'field': 'Computer Science Engineering' },
  { 'heading': 'DBMS', 'text': 'Database management systems', 'field': 'Information Technology' },
  { 'heading': 'CN', 'text': 'Computer networking fundamentals', 'field': 'Computer Science Engineering' },
  { 'heading': 'AI', 'text': 'Introduction to artificial intelligence', 'field': 'Computer Science Engineering' },
  { 'heading': 'ML', 'text': 'Machine learning concepts', 'field': 'Computer Science Engineering' },
  { 'heading': 'VLSI', 'text': 'VLSI design and principles', 'field': 'Electronics & Communication Engineering' },
  { 'heading': 'IoT', 'text': 'Internet of things basics', 'field': 'Electronics & Communication Engineering' },
  { 'heading': 'CE', 'text': 'Cloud computing essentials', 'field': 'Information Technology' },
  { 'heading': 'SE', 'text': 'Software engineering practices', 'field': 'Information Technology' },
  { 'heading': 'PDS', 'text': 'Programming and data structures', 'field': 'Computer Science Engineering' },
  { 'heading': 'DE', 'text': 'Digital electronics fundamentals', 'field': 'Electronics & Communication Engineering' }
]);


