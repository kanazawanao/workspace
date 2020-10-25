export class ListPresenterInputData {
  dataSource: ListDataSource[];
}

export class ListDataSource {
  header: string;
  icon: string;
  items: ListItem[];
}

export class ListItem {
  name: string;
  sentence: string;
}
