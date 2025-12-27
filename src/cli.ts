#!/usr/bin/env node
import { spawn, type ChildProcess } from 'node:child_process';
import process from 'node:process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const args = process.argv.slice(2);

// Handle Flags
if (args.includes('--help') || args.includes('-h')) {
	console.log(`
  Force a command to exit with code 0.

  Usage
    $ exit-zero <command> [args...]

  Options
    --version, -v   Show version
    --help, -h      Show help

  Examples
    $ exit-zero npm run lint
    $ exit-zero ls --non-existent-flag
	`);
	process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
	console.log(pkg.version);
	process.exit(0);
}

// Handle Logic
if (args.length === 0) {
	console.error('Error: No command provided.\nUsage: exit-zero <command>');
	process.exit(0);
}

// Fix 1: We use '!' because we checked length above, so we know it exists.
const command = args[0]!;
const commandArgs = args.slice(1);

// Fix 2: Explicitly cast as ChildProcess to satisfy TypeScript overloads
const child = spawn(command, commandArgs, {
	stdio: 'inherit',
	shell: true
}) as ChildProcess;

child.on('close', () => {
	process.exit(0);
});

// Fix 3: Explicitly type the error
child.on('error', (error: Error) => {
	console.error(`exit-zero error: ${error.message}`);
	process.exit(0);
});