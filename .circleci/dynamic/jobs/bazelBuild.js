const CircleCI = require("@circleci/circleci-config-sdk");
const go = require("../executors/go-postgres");
const postgres = require("../executors/go-postgres");

const bazelBuild = new CircleCI.Job("bazelBuild", go);
bazelBuild.addStep(new CircleCI.commands.Checkout());
bazelBuild.addStep(new CircleCI.commands.Run({ command: "echo test for go and postgres images" }));

module.exports = bazelBuild;