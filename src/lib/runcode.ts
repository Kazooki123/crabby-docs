import { spawn } from 'child_process';
import { promisify } from 'util';
import * as path from 'path-browserify';

export async function runCrabbyCode(code: string): Promise<string> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Output of your code:\n${code}\n\nNote: This is a simulated response. Real execution requires a backend server.`);
      }, 500);
    });
  } catch (error: any) {
    throw new Error(`Failed to execute code: ${error.message}`);
  }
}

// This is just an example, later on a real and logical code execution will be implemented :)
