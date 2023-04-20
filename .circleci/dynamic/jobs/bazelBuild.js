const CircleCI = require("@circleci/circleci-config-sdk");
const go = require("../executors/go-postgres");
const postgres = require("../executors/go-postgres");

const bazelBuildgo = new CircleCI.Job("bazelBuildgo", go);
bazelBuild.addStep(new CircleCI.commands.Checkout());
bazelBuild.addStep(new CircleCI.commands.Run({ command: "echo test for go and postgres images" }));

const bazelBuildpostgres = new CircleCI.Job("bazelBuildpostgres", postgres);
bazelBuild.addStep(new CircleCI.commands.Checkout());
bazelBuild.addStep(new CircleCI.commands.Run({ command: "echo test for go and postgres images" }));

module.exports = bazelBuild;