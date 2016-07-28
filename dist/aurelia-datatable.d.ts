import {Config,resolvedView} from 'aurelia-view-manager';
import {bindable,inject,computedFrom,customElement,bindingMode} from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';
import {Router} from 'aurelia-router';

export declare function configure(aurelia?: any): any;
export declare class ColumnsFilterValueConverter {
  toView(array?: any): any;
}
export declare class DataTable {
  criteria: any;
  where: any;
  limit: any;
  columns: any;
  searchColumn: any;
  searchable: any;
  sortable: any;
  edit: any;
  destroy: any;
  page: any;
  populate: any;
  select: any;
  repository: any;
  resource: any;
  data: any;
  route: any;
  pages: any;
  actions: any;
  constructor(Router?: any, element?: any, entityManager?: any);
  attached(): any;
  detached(): any;
  pageChanged(): any;
  limitChanged(): any;
  load(): any;
  populateEntity(row?: any): any;
  doDestroy(row?: any): any;
  doEdit(row?: any): any;
  doCustomAction(action?: any, row?: any): any;
  checkDisabled(action?: any, row?: any): any;
  doSort(columnLabel?: any): any;
  searchColumnChanged(newValue?: any, oldValue?: any): any;
  doSearch(): any;
  reload(): any;
  columnLabels: any;
  triggerEvent(event?: any, payload?: any): any;
  selected(row?: any): any;
  displayValue(row?: any, ...propertyName: any[]): any;
}