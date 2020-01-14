
module.exports = function (message) {

    if (NODE_ENV == 'development') {
        console.log(message);
        alert(`czsadcdsacasdcdascdsacasdcasdc ${message}`);
    }

    alert(`Welcome ${message}`);
}