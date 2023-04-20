const CircleCI = require("@circleci/circleci-config-sdk");
const goPostgres = require("../executors/go-postgres");

const bazelBuild = new CircleCI.Job("bazelBuild", goPostgres);
bazelBuild.addStep(new CircleCI.commands.Checkout());
bazelBuild.addStep(new CircleCI.commands.Run({ command: "test for go and postgres images" }));

module.exports = bazelBuild;