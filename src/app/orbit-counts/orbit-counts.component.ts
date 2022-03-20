import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
	types: string[] = [
		"Space Debris",
		"Communication",
		"Probe",
		"Positioning",
		"Space Station",
		"Telescope"
	]

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }
 total(): number{
	 let sum: number = 0;
	 this.types.forEach(x => {
		sum += this.countByType(x);
	 })
	 return sum
 }

}