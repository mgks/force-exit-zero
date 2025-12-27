import { spawn, type SpawnOptions } from 'node:child_process';

export function runAndExitZero(command: string, args: string[], options?: SpawnOptions): Promise<void> {
	return new Promise((resolve) => {
		const child = spawn(command, args, {
			stdio: 'inherit',
			shell: true,
			...options
		});

		// Resolve (succeed) regardless of outcome
		child.on('close', () => resolve());
		child.on('error', () => resolve());
	});
}