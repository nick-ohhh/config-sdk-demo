const CircleCI = require("@circleci/circleci-config-sdk");
const postgres = require("../executors/postgres");

const bazelBuildpostgres = new CircleCI.Job("bazelBuildpostgres", postgres);
bazelBuildpostgres.addStep(new CircleCI.commands.Checkout());
bazelBuildpostgres.addStep(new CircleCI.commands.Run({ command: "echo test for postgres image" }));

module.exports = bazelBuildpostgres;