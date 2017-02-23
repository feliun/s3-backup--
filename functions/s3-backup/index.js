const AWS = require('aws-sdk');

exports.handle = function(e, ctx, cb) {
    const records = e.Records;
    console.log('Backing up ', records.length);
    records.forEach(function(record) {
        console.log('Source bucket: ', record.s3.bucket.name);
        console.log('File name: ', record.s3.object.key);
        console.log('Operation: ', record.eventName);
    });
    console.log('context: ', ctx);
    cb(null, { hello: 'world' });
}
