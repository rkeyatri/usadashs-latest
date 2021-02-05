import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'; 

import { DataService, AlertService } from '../services';
import { Import, MetaData, GraphModel } from '../models';
import { IMPORT_COLS } from '../helpers/import.columns';    



import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};




@Component({
    selector: 'app-imports',
    templateUrl: './imports.component.html',
    styleUrls: ['./imports.component.scss']
})

export class ImportsComponent implements OnInit {
 

  gridApi:any;
  agGrid:any;
  columnApi:any;  
  rowSelection:any; 
  public colDef; 
  public defaultColDef;
  private pivotPanelShow; 
  private rowGroupPanelShow;

autoGroupColumnDef = {
    headerName: 'Country',
    field: 'country',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: false
    }
}; 
    importKeys = IMPORT_COLS;
    params: object;
    shipments: Import[];
    rowData:Import[];
    meta: MetaData;
    graphdata: GraphModel;
    GraphModel:any
    compaeData: [];
    series:any;
    shipmentFilters = []; 
    checkedItems: any = [];
    coun:GraphModel[];
    pageIndex = 1;
    pageSize = 50; 
    viewPort = [1270, 550];
    viewPiePort = [1200, 500];
    formData: any ;
   sideBar = {
    toolPanels: [
        {
            id: 'columns',
            labelDefault: 'Columns',
            labelKey: 'columns',
            iconKey: 'columns',
            toolPanel: 'agColumnsToolPanel',
        },
        {
            id: 'filters',
            labelDefault: 'Filters',
            labelKey: 'filters',
            iconKey: 'filter',
            toolPanel: 'agFiltersToolPanel',
        }
    ],
    position: 'left',
    defaultToolPanel: 'filters'
}
  chartOptions;    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService,
        private ds: DataService
    ) {
      this.colDef = [   
        {headerName:'Date', field: 'date', sortable: true, filter: true, headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,  },   
        {headerName:'Consignee Name', field: 'consignee_Name'},
        {headerName:'Shipper Name', field: 'shipper_Name', sortable: true, filter: true,   },
        {headerName:'Hs Code', field: 'hS_Code' ,sortable: true, filter: true,   },
        
        {headerName:'Product Description', field: 'product_Description', sortable: true, filter: true,  }, 
        {headerName:'Weight In Kg', field: 'weight_in_KG' ,sortable: true, filter: true,   }, 
        {headerName:'Quantity', field: 'quantity' ,sortable: true, filter: true,   }, 
        {headerName:'Unit', field: 'quantity_Unit' ,sortable: true, filter: true,   },
        {headerName:'Cif', field: 'cif' ,sortable: true, filter: true,   }, 
        {headerName:'Country', field: 'country', sortable: true, filter: true,},
        {headerName:'Loading Port', field: 'loading_Port' ,sortable: true, filter: true,},     
        {headerName:'Unloading Port', field: 'unloading_Port',sortable: true, filter: true, }
      
       
    ];
    
      this.rowSelection = 'multiple';
     
      this.defaultColDef = {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      };
      this.rowSelection = 'multiple';
      this.rowGroupPanelShow = 'always';
      this.pivotPanelShow = 'always';


      this.chartOptions = {
        series: [
          {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }
        ],
        chart: {
          height: 350,
          type: "bar",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Jan",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        }
      };
    
  
  
    }

   
    
    //   var checkboxSelection = function (params) {
    //     return params.columnApi.getRowGroupColumns().length === 0;
    //   };
    //   var headerCheckboxSelection = function (params) {
    //     return params.columnApi.getRowGroupColumns().length === 0;
    //   };
    //  }
 
  
    ngOnInit() {
        const urlParams = combineLatest(
            this.route.params,
            this.route.queryParams,
            (params, queryParams) => ({ ...params, ...queryParams})
        );

        urlParams.subscribe(routeParams => {
            this.params = routeParams;
            this.params['mode'] = 'import'; 
                this.searchData(this.params, true);            
        });
    }
 
  
    onSearchSubmit(form: any){
      const searchFormData = form.value; 
    
      console.log(this.formData)
      if(searchFormData.mode === 'imports') {
          this.router.navigate(['/imports'], { queryParams: this.getFormParams(searchFormData)});
           
      } 
    //   else if(searchFormData.mode === 'imports' ) {
    //     alert("hi")
    //     this.router.navigate(["/imports"], { queryParams: this.getFormParams(searchFormData + this.checkedItems) });
    //     // queryParams: { id: this.checkedItems.join(searchFormData)}});
    // }
       
}
    getFormParams(formData: object){
        const formParams = {};
        Object.entries(formData).forEach(
            ([key, value]) => {
                if (value !== '' && key !== 'mode') {
                    formParams[key] = value;
                }
            }
        );
        return formParams;
    }
    // onChecked(key: any, event: any) {
    //   let { checked, value } = event.target;
    //   if (checked) {
    //     this.checkedItems.push(value);
       
    //     console.log(this.checkedItems)
    //   } else {
    //     let index = this.checkedItems.indexOf(value);
    //     if (index !== -1) this.checkedItems.splice(index, 1);
    //     console.log(this.checkedItems)
    //   }
    // }
    
    






























    onSwitchTab(tab: any) {
        if (tab.for === '') {
            this.ds.getDashboard(this.params)
            .pipe(
                map(
                    data =>  data[0]
                )
            )
            .subscribe(
                (data) => {
                    this.graphdata = data;
                   
                }
            );
        }
        if(tab.for === 'dashboard'){
           
            this.ds.getDashboard(this.params)
            .subscribe(
                (data) => {
                let  country = data.countryGraphas;
                let  hscode = data.hscodeGraphas;
                let  consignee = data.consigneeGraphas;
               this.series = Object.keys(country).map(function(key) {
                  return [Number(key), country[key]];
                });
                
                console.log(this.series); 
                }
            );
        }
    }
    searchData(params: object, updateFilter?: boolean) {
      params['pageIndex'] = this.pageIndex;
      params['pageSize'] = this.pageSize;
      this.ds.getImportData(params)
          .subscribe(
              ({ imports, meta }) => {
                  console.log(imports)
                  if (imports != null) { 
                       this.rowData=imports; 
                      this.meta = meta;
                       console.log(this.meta)
                  } else {
                      alert('No records found');
                  }
                  window.scroll(0, 320);
              },
          error => {
              this.shipments = null;
              this.meta = null;
              alert('No records found')
          }
      );
      if(updateFilter) {
          this.ds.getImportFilters(params)
          .pipe(map(data => data))
          .subscribe(
              data => {
                  this.shipmentFilters = data; 
                  console.log(this.shipmentFilters)
              }
          )
      }
     
  }
  // onChecked(key: any, event: any) {
  //   let { checked, value } = event.target;
  //   if (checked) {
  //     this.checkedItems.push(value);
     
  //     console.log(this.checkedItems)
  //   } else {
  //     let index = this.checkedItems.indexOf(value);
  //     if (index !== -1) this.checkedItems.splice(index, 1);
  //     console.log(this.checkedItems)
  //   }
  // }
  
    filterData(key: any, value:any) {
      // let { checked, value } = event.target;
      // if (checked) {
      //   this.checkedItems.push(value);
      // }
        this.params[key] = value;
        this.pageIndex = 1;
        this.searchData(this.params, true);
        const qParams: object = {};
        qParams[key] = value;
        this.router.navigate([], { queryParams: qParams, queryParamsHandling: 'merge' });
    }
    goToPage(n: number): void {
        this.pageIndex = n;
        this.searchData(this.params);
    }
    onNext(): void {
        this.pageIndex++;
        this.searchData(this.params);
    }
    onPrev(): void {
        this.pageIndex--;
        this.searchData(this.params);
    }
    onResize(event) {
        const width = event.target.innerWidth;
        this.viewPort = [width - 110, 550];
        this.viewPiePort = [width - 120, 550];
    }
}
 