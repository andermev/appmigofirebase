import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AlertComponent } from "./alert/alert.component";
import { CarListComponent } from "./cars/car-list.component";
import { ExploreComponent } from "./explore/explore.component";
import { MapsComponent } from "./maps/maps.component";

export const COMPONENTS = [CarListComponent, MapsComponent, ExploreComponent, AlertComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(mapsTab:maps//exploreTab:explore//alertTab:alert)", pathMatch: "full" },
    { path: "cars", loadChildren: "./cars/cars.module#CarsModule" },
    { path: "maps", component: MapsComponent, outlet: "mapsTab" },
    { path: "explore", component: CarListComponent, outlet: "exploreTab"},
    { path: "alert", component: AlertComponent, outlet: "alertTab"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
