import { PlatformLocation, APP_BASE_HREF } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { ICustomizationSettings } from "../../interfaces";
import { ServiceHelpers } from "../../services";
import { IOmbiConfigModel } from "../models/OmbiConfigModel";


@Injectable()
export class WizardService extends ServiceHelpers {
    constructor(public http: HttpClient, @Inject(APP_BASE_HREF) href:string) {
        super(http, "/api/v2/wizard/", href);
    }

    public async addOmbiConfig(config: IOmbiConfigModel): Promise<ICustomizationSettings> {
        return await this.http.post<ICustomizationSettings>(`${this.url}config`, config, {headers: this.headers}).toPromise();
    }
}
