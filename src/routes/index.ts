import { importLoginRoutes } from './login';
import { importServerRoutes } from './servers';
import { importUserRoutes } from './users';

export const importAllRoutes = (app: any) => {
    importServerRoutes(app);
    importUserRoutes(app);
    importLoginRoutes(app);
};
