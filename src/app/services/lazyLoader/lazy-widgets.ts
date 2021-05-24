import { NgModuleFactory, Type } from "@angular/core/";

export const lazyWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
    {
        path: 'module1',
        loadChildren: () => import(`../../modules/module1/module1.module`).then(m => m.Module1Module)
    },
    {
        path: 'module2',
        loadChildren: () => import(`../../modules/module2/module2.module`).then(m => m.Module2Module)
    },
];


// This function will work as a factory for injecting lazy widget array in the main module
export function lazyArrayToObj() {
    const result = {};
    for (const w of lazyWidgets) {
        result[w.path] = w.loadChildren;
    }
    return result;
}