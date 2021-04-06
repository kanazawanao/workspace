export class ListInputData {
  dataSource: ListDataSource[];
}

export class ListDataSource {
  header: string;
  items: ListItem[];
}

export class ListItem {
  icon: string;
  name: string;
  sentence: string;
}
