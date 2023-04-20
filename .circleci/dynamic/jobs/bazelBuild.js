const CircleCI = require("@circleci/circleci-config-sdk");
const go = require("../executors/go-postgres");
const postgres = require("../executors/go-postgres");

const bazelBuildgo = new CircleCI.Job("bazelBuildgo", go);
bazelBuildgo.addStep(new CircleCI.commands.Checkout());
bazelBuildgo.addStep(new CircleCI.commands.Run({ command: "echo test for go and postgres images" }));

const bazelBuildpostgres = new CircleCI.Job("bazelBuildpostgres", postgres);
bazelBuildpostgres.addStep(new CircleCI.commands.Checkout());
bazelBuildpostgres.addStep(new CircleCI.commands.Run({ command: "echo test for go and postgres images" }));

module.exports = bazelBuildgo;
module.exports = bazelBuildpostgres;