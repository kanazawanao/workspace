import { IBook } from '@workspace/api-interfaces';

export class BooksEntryModel implements IBook {
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
