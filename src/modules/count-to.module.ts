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
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: CountToModule,
            providers: []
        };
    }

}
