import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { initFirebase } from "./shared/firebase.common";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        initFirebase();
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
