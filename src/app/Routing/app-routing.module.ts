import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AppComponent } from "../app.component";



const indexRoute : Route = {
    path : '',
    component : AppComponent
};


const routes: Routes = [

    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main',  component: AppComponent },

    indexRoute,
    // fallbackRoute,
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}














// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, Route } from '@angular/router';
//
// import { NotfoundComponent } from "../NotFoundBundle/notFound.component";
// import { AppComponent } from "../app.component";
//
//
//
//
//
// const indexRoute : Route = {
//     path : '',
//     component : AppComponent //MainComponent
// };
//
// const fallbackRoute : Route = {
//     path : '**',
//     component : NotfoundComponent
// };
//
//
// const routes : Routes = [
//     // { path : '', redirectTo : '/user/login', pathMatch : 'full' },
//
//     // { path : 'column', component : ColumnEditComponent, canActivate : [ AuthGuard ]  },
//
//     // {
//     //     path : 'item', children : [
//     //     { path : '', component : GoodsListComponent, canActivate : [ AuthGuard ] },
//     //     { path : 'edit/:id', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //     { path : 'new', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //
//     //     {
//     //         path : 'catalog', children : [
//     //         { path : '', component : CatalogListComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'edit/:id', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'new', component : CommonEditParentComponent, canActivate : [ AuthGuard ] }
//     //     ]
//     //     },
//     //
//     //     {
//     //         path : 'alias', children : [
//     //         { path : '', component : AliasListComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'edit/:id', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'new', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //     ]
//     //     },
//     //
//     //     {
//     //         path : 'manufacturer', children : [
//     //         { path : '', component : ManufacturerListComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'edit/:id', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'new', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //     ]
//     //     },
//     //
//     //     {
//     //         path : 'brand', children : [
//     //         { path : '', component : BrandListComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'edit/:id', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //         { path : 'new', component : CommonEditParentComponent, canActivate : [ AuthGuard ] },
//     //     ]
//     //     },
//     //
//     //
//     // ]
//     // },
//
//
//     indexRoute,
//     fallbackRoute
//
//
// ];
//
// @NgModule ( {
//     imports : [ RouterModule.forRoot ( routes ) ],
//     exports : [ RouterModule ]
// } )
// export class AppRoutingModule {
// }