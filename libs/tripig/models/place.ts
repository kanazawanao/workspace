import {} from '@angular/google-maps';

export class Place implements google.maps.places.PlaceResult {
  address_components?: google.maps.GeocoderAddressComponent[];
  adr_address?: string;
  aspects?: google.maps.places.PlaceAspectRating[];
  formatted_address?: string;
  formatted_phone_number?: string;
  geometry?: google.maps.places.PlaceGeometry;
  html_attributions?: string[];
  icon?: string;
  id?: string;
  international_phone_number?: string;
  name: string;
  opening_hours?: google.maps.places.OpeningHours;
  permanently_closed?: boolean;
  photos?: google.maps.places.PlacePhoto[];
  place_id?: string;
  plus_code?: google.maps.places.PlacePlusCode;
  price_level?: number;
  rating?: number;
  reviews?: google.maps.places.PlaceReview[];
  types?: string[];
  url?: string;
  user_ratings_total?: number;
  utc_offset?: number;
  utc_offset_minutes?: number;
  vicinity?: string;
  website?: string;
  selected?: boolean;
}
