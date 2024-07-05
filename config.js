const HOST = '127.0.0.1';
const PORT = '6379';
const PASSWORD = '';

module.exports = {
    redis_config : {
        redis : {
            HOST,
            PORT,
            PASSWORD
        }
    },
    job_config : {
        removeOnComplete :true,
        attempts : 5,
        delay : 5000
    }
}