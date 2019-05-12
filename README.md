Only here for test purposes to demonstrate the issue in https://github.com/vanthome/winston-elasticsearch since de6e51f37a20b683b76f71ae10038a86736e1058.

Please modify the version of winston-elasticsearch to

- 0.7.3 (no issue)
- 0.7.4 (the issue occurs)
- git+https://github.com/litti/winston-elasticsearch.git

and run `node app.js`. Watch the console log which should be every 100ms and the timestamps in your ES index.