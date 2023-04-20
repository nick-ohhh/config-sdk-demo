const CircleCI = require("@circleci/circleci-config-sdk");

// Import Config Components
const jobA = require("./jobs/jobA");
const buildGoImage = require("./jobs/bazelBuild");
const buildGoImage = require("./jobs/bazelBuild");

// Initiate a new Config
const myConfig = new CircleCI.Config()

// Add elements to the config
myConfig
    .addJob(jobA)
    .addJob(buildGoImage)

// Instantiate new Workflow and add jobA
const dynamicWorkflow = new CircleCI.Workflow("dynamic-workflow");
dynamicWorkflow.addJob(jobA);

// Conditionally add buildGoImage
// This condition could be based on anything from the response of an API call
// to the contents of a file
if (1 == 1) {
    dynamicWorkflow.addJob(buildGoImage);
}

// Add the dynamic workflow to the config
myConfig.addWorkflow(dynamicWorkflow);

// Write the config to file
myConfig.writeFile('dynamicConfig.yml');