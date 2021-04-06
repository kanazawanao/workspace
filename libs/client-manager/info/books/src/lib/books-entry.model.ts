import { IBook } from '@workspace/api-interfaces';

export class BooksEntryModel implements IBook {
  title = '';
  author = '';
  description = '';
  impressions = '';
  other = '';
  publisher = '';
  rate = 0;
  type = '';
  url = '';
}
