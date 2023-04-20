const CircleCI = require("@circleci/circleci-config-sdk");
const postgres = new CircleCI.executors.DockerExecutor(
    "cimg/postgres:15.1",
    "medium"
);
module.exports = postgres;
