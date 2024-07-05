# Project Documentation
* Repo to run a redis queue using Bull 
* Version: `Node.js: 15.3.0`

### How to do the setup ###
* Pull the code
* Run — npm install
* Hit the API to save the data in the queue

### How to check the queue stats ###
* Install bull-repl package globally
* Run — bull-repl
* Run — connect --host 127.0.0.1 --port 6379 queue_name
* Run — active (To check the active queue count and data)


