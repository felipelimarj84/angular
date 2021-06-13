import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-wf-menu-lateral',
	templateUrl: './wf-menu-lateral.component.html',
	styleUrls: ['./wf-menu-lateral.component.scss']
})
export class WfMenuLateralComponent implements OnInit {
	// tslint:disable-next-line: no-output-on-prefix
	@Output() onRouterClickEvent: EventEmitter<any> = new EventEmitter();
	@Input() botoes;

	constructor() {}

	ngOnInit() {}

	onMenuRouterClick(childs) {
		this.onRouterClickEvent.emit(childs);
	}
}
