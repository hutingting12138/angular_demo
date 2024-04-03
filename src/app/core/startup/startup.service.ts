/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
import { Injectable } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS_AUTO } from '../../../style-icons-auto';

@Injectable()

export class StartupService {
    constructor(iconSrv: NzIconService,) {
        iconSrv.addIcon(...ICONS_AUTO);
    }
}
