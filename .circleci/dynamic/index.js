const CircleCI = require("@circleci/circleci-config-sdk");

// Import Config Components
const jobA = require("./jobs/jobA");
const bazelBuildgo = require("./jobs/bazelBuild");
const bazelBuildpostgres = require("./jobs/bazelBuild");

// Initiate a new Config
const myConfig = new CircleCI.Config()

// Add elements to the config
myConfig
    // .addJob(jobA)
    .addJob(bazelBuildgo)
    .addJob(bazelBuildpostgres)

// Instantiate new Workflow and add jobA
const dynamicWorkflow = new CircleCI.Workflow("bazel-image-build");
dynamicWorkflow.addJob(bazelBuildgo);
dynamicWorkflow.addJob(bazelBuildpostgres)

// Conditionally add jobA
// This condition could be based on anything from the response of an API call
// to the contents of a file
// if (1 == 0) {
//     dynamicWorkflow.addJob(jobA);
// }

// Add the dynamic workflow to the config
myConfig.addWorkflow(dynamicWorkflow);

// Write the config to file
myConfig.writeFile('dynamicConfig.yml');