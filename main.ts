#!/usr/bin/env node
const LINE = "Do not deploy on Friday. You will anyway, and I will be here watching.";

const USAGE = [
  "Usage: node main.ts [--shout]",
  "",
  "Options:",
  "  --shout   Print the line in all caps",
  "  --help    Show this help and exit",
].join("\n");

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function main(): void {
  if (hasFlag("--help") || hasFlag("-h")) {
    console.error(USAGE);
    process.exitCode = 0;
    return;
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
