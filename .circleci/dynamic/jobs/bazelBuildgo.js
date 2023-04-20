const CircleCI = require("@circleci/circleci-config-sdk");
const go = require("../executors/go-postgres");

const bazelBuildgo = new CircleCI.Job("bazelBuildgo", go);
bazelBuildgo.addStep(new CircleCI.commands.Checkout());
bazelBuildgo.addStep(new CircleCI.commands.Run({ command: "echo test for go image" }));

module.exports = bazelBuildgo;