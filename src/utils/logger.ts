const prefix = 'project-name';

export const logger = {
  warn: (m: any, ...args: any[]) => import.meta.env.VITE_NODE_ENV === 'development'
    && console.warn(prefix, m, ...args),
  log: (m: any, ...args: any[]) => console.log(prefix, m, ...args),
  error: (m: any, ...args: any[]) => console.error(prefix, m, ...args),
  info: (m: any, ...args: any[]) => console.info(prefix, m, ...args),
};
