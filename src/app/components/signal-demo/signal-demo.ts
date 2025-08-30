import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css'
})
export class SignalDemo {
  a = 10;
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  updateValue() {
    this.count.update(value => value + 1)
  }
  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
}
