import { IBook } from '@workspace/api-interfaces';

export class BookEntryModel implements IBook {
  author = '';
  description = '';
  impressions = '';
  other = '';
  publisher = '';
  rate = 0;
  title = '';
  type = '';
  url = '';
}
