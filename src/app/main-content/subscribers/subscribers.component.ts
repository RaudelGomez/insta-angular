import { Component, inject } from '@angular/core';
import { AbosService } from '../../services/abos.service';

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [],
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss'
})
export class SubscribersComponent {
  abos = inject(AbosService);

}
