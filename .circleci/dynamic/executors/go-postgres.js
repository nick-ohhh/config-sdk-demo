const CircleCI = require("@circleci/circleci-config-sdk");
const goPostgres = new CircleCI.executors.DockerExecutor(
    "cimg/go:1.19.5",
    // "cimg/postgres:15.1",
    "medium"
);
module.exports = goPostgres;