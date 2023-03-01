import { ChildProcess, spawn } from 'child_process';
import { resolve } from 'path';
import { Compiler } from 'webpack';

// Types
import { ICompilationHookFunction, IOptions } from './types';

export default class WebExtPlugin {
  private readonly browserConsole: boolean;
  private readonly devtools: boolean;
  private readonly pluginName: string = 'WebExtPlugin';
  private webExtRunProcess: ChildProcess | null;

  constructor(options?: IOptions) {
    this.browserConsole = options?.browserConsole || false;
    this.devtools = options?.devtools || false;
    this.webExtRunProcess = null;
  }

  private afterEmit(compiler: Compiler): ICompilationHookFunction {
    return async (): Promise<void> => {
      this.run(compiler.outputPath);
    };
  }

  private run(sourceDir: string): void {
    let runCommand: string[] = [
      'run',
      '--source-dir',
      sourceDir,
      '--firefox',
      resolve(process.cwd(), '.firefox', 'firefox'), // use the installed version from the npm prepare script
    ];

    if (this.browserConsole) {
      runCommand = [...runCommand, '--browser-console'];
    }

    if (this.devtools) {
      runCommand = [...runCommand, '--devtools'];
    }

    // start web-ext
    this.webExtRunProcess = spawn('web-ext', runCommand);
  }

  public apply(compiler: Compiler): void {
    compiler.hooks.afterEmit.tapPromise(
      this.pluginName,
      this.afterEmit(compiler)
    );
  }
}
