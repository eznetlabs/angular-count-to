import { CountToDirective } from './../directives/count-to.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    declarations: [
        CountToDirective
        // Pipes.
        // Directives.
    ],
    exports: [
        CountToDirective
        // Pipes.
        // Directives.
    ]
})
export class CountToModule {

    /**
     * Use in AppModule
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }

}
