import { MapComponent } from './map.component';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

export default {
  title: 'MapComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [CommonModule, GoogleMapsModule],
  },
  component: MapComponent,
  props: {
    center: undefined,
  },
});
