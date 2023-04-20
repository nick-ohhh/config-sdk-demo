const CircleCI = require("@circleci/circleci-config-sdk");
const goPostgres = require("../executors/go-postgres");

const buildGoImage = new CircleCI.Job("bazelBuild", goPostgres);
buildGoImage.addStep(new CircleCI.commands.Checkout());
buildGoImage.addStep(new CircleCI.commands.Run({ command: "test for go and postgres images" }));

module.exports = buildGoImage;