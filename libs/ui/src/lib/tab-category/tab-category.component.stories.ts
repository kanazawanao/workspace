import { Category } from './category.class';
import { TabCategoryComponent } from './tab-category.component';
import { TabCategoryModule } from './tab-category.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const CATEGORIES: Category[] = [
  {
    value: '観光',
    viewValue: 'Sightseeing',
    icon: 'local_see',
    custome: false,
  },
  {
    value: 'レストラン',
    viewValue: 'Restaurant',
    icon: 'restaurant',
    custome: false,
  },
  {
    value: 'ショッピング',
    viewValue: 'Shopping',
    icon: 'shopping_cart',
    custome: false,
  },
  {
    value: 'カフェ',
    viewValue: 'Cafe',
    icon: 'local_cafe',
    custome: false,
  },
  {
    value: 'ホテル',
    viewValue: 'Hotel',
    icon: 'hotel',
    custome: false,
  },
  {
    value: 'コンビニ',
    viewValue: 'Convenience Store',
    icon: 'local_convenience_store',
    custome: false,
  },
  {
    value: 'ガソリンスタンド',
    viewValue: 'Gas Station',
    icon: 'local_gas_station',
    custome: false,
  },
  {
    value: '公園',
    viewValue: 'Park',
    icon: 'local_florist',
    custome: false,
  },
  {
    value: '遊び',
    viewValue: '遊び',
    icon: 'sports',
    custome: false,
  },
  {
    value: '温泉',
    viewValue: '温泉',
    icon: 'hot_tub',
    custome: false,
  },
  {
    value: '動物園',
    viewValue: 'Zoo',
    icon: 'pets',
    custome: false,
  },
];

export default {
  title: 'TabCategoryComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, TabCategoryModule],
  },
  component: TabCategoryComponent,
  props: { categories: CATEGORIES },
});
