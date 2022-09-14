import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { HttpService } from './http.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

    response: Array<any> = []

    constructor(private http: HttpService) {

    }

    settings: Data = { "page": 1, "last_page": 0, "sort_field": "id", "sort": "desc", "search_string": null, "device_state": "all", "is_archived": false, "paginate": true, "append_fields": ["active_polling", "attributes", "tied_point"], "per_page": 10 }

    ngOnInit() {
        this.http.getDevices(this.settings)
            .subscribe({
                next: (res: any) => {
                    this.response = res.data.metering_devices.data;
                },
                error: error => console.log(error)
            });
    }
}

