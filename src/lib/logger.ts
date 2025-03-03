class Logger {
  private logLevel = process.env.NODE_ENV === "development" ? "debug" : "info";

  info(message: string, ...args: any[]) {
    if (this.logLevel === "debug") {
      console.log(`[INFO] ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]) {
    console.error(`[ERROR] ${message}`, ...args);
  }

  debug(message: string, ...args: any[]) {
    if (this.logLevel === "debug") {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }
}

export const logger = new Logger();
