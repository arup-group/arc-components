import { bootstrapApplication } from '@angular/platform-browser';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import '@arc-web/components/src/components/container/arc-container';
import { Grid as ArcGrid } from 'gridjs';
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
} from '@tanstack/angular-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => `<i>${info.getValue<string>()}</i>`,
    header: () => `<span>Last Name</span>`,
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => `<span>Visits</span>`,
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  },
];

@Component({
  standalone: true,
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FlexRenderDirective],
  template: `
    <arc-container>
      <h4>Grid.js Grid</h4>
      <div style="margin: 20px;" #grid></div>
      <h4>Tanstack Table</h4>
      <div style="margin: 20px;">
        <table arc-table>
          <thead>
            <tr *ngFor="let headerGroup of table.getHeaderGroups()">
              <ng-container *ngFor="let header of headerGroup.headers">
                <th *ngIf="!header.isPlaceHolder">
                  <ng-container
                    *flexRender="
                      header.column.columnDef.header;
                      props: header.getContext();
                      let header
                    "
                  >
                    <div [innerHTML]="header"></div>
                  </ng-container>
                </th>
              </ng-container>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of table.getRowModel().rows">
              <td *ngFor="let cell of row.getVisibleCells()">
                <ng-container
                  *flexRender="
                    cell.column.columnDef.cell;
                    props: cell.getContext();
                    let cell
                  "
                >
                  <div [innerHTML]="cell"></div>
                </ng-container>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr *ngFor="let footerGroup of table.getFooterGroups()">
              <ng-container *ngFor="let footer of footerGroup.headers">
                <th *ngIf="!footer.isPlaceHolder">
                  <ng-container
                    *flexRender="
                      footer.column.columnDef.footer;
                      props: footer.getContext();
                      let footer
                    "
                  >
                    <div [innerHTML]="footer"></div>
                  </ng-container>
                </th>
              </ng-container>
            </tr>
          </tfoot>
        </table>
      </div>
    </arc-container>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid') grid!: ElementRef<HTMLElement>;

  public tableData = signal<Person[]>(defaultData);
  public table = createAngularTable(() => ({
    data: this.tableData(),
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  }));

  ngAfterViewInit() {
    new ArcGrid({
      columns: [
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'age' },
        { name: 'visits' },
        { name: 'status' },
        { name: 'progress' },
      ],
      data: this.tableData(),
    }).render(this.grid.nativeElement);
  }
}

bootstrapApplication(AppComponent).catch(console.error);
