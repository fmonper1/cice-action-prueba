import * as core from "@actions/core";
import * as github from "@actions/github";

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
