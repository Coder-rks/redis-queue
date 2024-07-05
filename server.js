const express = require('express');
const queue = require('bull');
const app = express();
const { redis_config, job_config } = require('./config');

function createNewQueue(queue_name) {
    return new queue(queue_name, redis_config)
}

function completedTask(task) {
    console.info(`Task in ${task.queue.name} completed for: ${task.id}`);
    task.remove();
}

app.get('/', (req, res) => {

    //create a queue with any name
    const logsQueue = createNewQueue('data_queue');
    let data = {name: 'Jack', age: 20, address: 'New York'};

    //add data to the queue
    logsQueue.add(data, job_config);

    //process the data
    logsQueue.process((task, done) => {
        //task.data will provide the saved data in queue
        //you can process this data or save it to database according to your requirement
        //return callback
        done(null,'success');
    })

    //remove the task when it is completed
    logsQueue.on('completed', completedTask );
})

app.listen(3020, ()=> {
    console.log('App running');
});