import { Category } from './category.class';
import { TabCategoryComponent } from './tab-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTabCategoryModule } from '@workspace/ui';

const CATEGORIES: Category[] = [
  {
    value: '観光',
    viewValue: 'Sightseeing',
    icon: 'local_see',
    isDefault: true,
  },
  {
    value: 'レストラン',
    viewValue: 'Restaurant',
    icon: 'restaurant',
    isDefault: true,
  },
  {
    value: 'ショッピング',
    viewValue: 'Shopping',
    icon: 'shopping_cart',
    isDefault: true,
  },
  {
    value: 'カフェ',
    viewValue: 'Cafe',
    icon: 'local_cafe',
    isDefault: true,
  },
  {
    value: 'ホテル',
    viewValue: 'Hotel',
    icon: 'hotel',
    isDefault: true,
  },
  {
    value: 'コンビニ',
    viewValue: 'Convenience Store',
    icon: 'local_convenience_store',
    isDefault: true,
  },
  {
    value: 'ガソリンスタンド',
    viewValue: 'Gas Station',
    icon: 'local_gas_station',
    isDefault: true,
  },
  {
    value: '公園',
    viewValue: 'Park',
    icon: 'local_florist',
    isDefault: true,
  },
  {
    value: '遊び',
    viewValue: '遊び',
    icon: 'sports',
    isDefault: true,
  },
  {
    value: '温泉',
    viewValue: '温泉',
    icon: 'hot_tub',
    isDefault: true,
  },
  {
    value: '動物園',
    viewValue: 'Zoo',
    icon: 'pets',
    isDefault: true,
  },
];

export default {
  title: 'TabCategoryComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, UiTabCategoryModule],
  },
  component: TabCategoryComponent,
  props: { categories: CATEGORIES },
});
