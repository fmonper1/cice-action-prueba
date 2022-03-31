const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nombrePersona = core.getInput("persona");
  console.log(`Hola ${nombrePersona}`);

  const hora = new Date().toTimeString();
  core.setOutput("hora", hora);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Mi churro de informacion: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
