import { Component } from '@angular/core';
import { LocalStorageService } from './shared/local-storage/local-storage.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private storageService: LocalStorageService) {
		this.storageService.testLocalStorage();
	}
}
