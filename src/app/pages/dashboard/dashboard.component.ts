import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';

const folders: any[] = [
  {
    icon: 'android',
    badge: false,
    name: 'Android app',
    updated: 'July 21, 2017'
  },
  {
    icon: 'update',
    badge: false,
    name: 'Update plugins',
    updated: 'July 19, 2017'
  },
  {
    icon: 'bug_report',
    badge: false,
    name: 'Fix bugs',
    updated: 'July 22, 2017'
  },
  {
    icon: 'unarchive',
    badge: false,
    name: 'Create app design',
    updated: 'July 25, 2017'
  },
  {
    icon: 'content_copy',
    badge: 8,
    name: 'Create widgets',
    updated: 'July 16, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Documentation',
    updated: 'July 28, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Upload',
    updated: 'July 30, 2017'
  }
];
const timelineData: any[] = [
  {
    'timeline': [
      {
        'content': `Aenean lacinia bibendum nulla sed consectetur.`,
        'pointColor': '#ea8080'
      },
      {
        'content': `Aenean lacinia bibendum nulla.`,
        'pointColor': '#915035'
      },
      {
        'content': `Lorem ipsum dolor sit amet.`,
        'pointColor': '#B925FF'
      },
      {
        'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        'pointColor': '#C5CAE9'
      },
      {
        'content': `Lorem ipsum dolor sit.`,
        'pointColor': '#FF8A65'
      }
    ]
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent {
  pageTitle: string = 'Dashboard';
  folders: any[] = folders;
  timelineData: any[] = timelineData;
  private chart: any;

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('amchart-1', {
      'type': 'serial',
      'theme': 'dark',
      'dataDateFormat': 'YYYY-MM-DD',
      'dataProvider': [
        {
          'date': '2016-01-01',
          'distance': 227,
          'townName': 'New York',
          'townName2': 'New York',
          'townSize': 25,
          'latitude': 40.71,
          'duration': 408
        }, {
          'date': '2016-01-02',
          'distance': 371,
          'townName': 'Washington',
          'townSize': 14,
          'latitude': 38.89,
          'duration': 482
        }, {
          'date': '2016-01-03',
          'distance': 433,
          'townName': 'Wilmington',
          'townSize': 6,
          'latitude': 34.22,
          'duration': 562
        }, {
          'date': '2016-01-04',
          'distance': 345,
          'townName': 'Jacksonville',
          'townSize': 7,
          'latitude': 30.35,
          'duration': 379
        }, {
          'date': '2016-01-05',
          'distance': 480,
          'townName': 'Miami',
          'townName2': 'Miami',
          'townSize': 10,
          'latitude': 25.83,
          'duration': 501
        }, {
          'date': '2016-01-06',
          'distance': 386,
          'townName': 'Tallahassee',
          'townSize': 7,
          'latitude': 30.46,
          'duration': 443
        }, {
          'date': '2016-01-07',
          'distance': 348,
          'townName': 'New Orleans',
          'townSize': 10,
          'latitude': 29.94,
          'duration': 405
        }, {
          'date': '2016-01-08',
          'distance': 238,
          'townName': 'Houston',
          'townName2': 'Houston',
          'townSize': 16,
          'latitude': 29.76,
          'duration': 309
        }, {
          'date': '2016-01-09',
          'distance': 218,
          'townName': 'Dalas',
          'townSize': 17,
          'latitude': 32.8,
          'duration': 287
        }, {
          'date': '2016-01-10',
          'distance': 349,
          'townName': 'Oklahoma City',
          'townSize': 11,
          'latitude': 35.49,
          'duration': 485
        }, {
          'date': '2016-01-11',
          'distance': 603,
          'townName': 'Kansas City',
          'townSize': 10,
          'latitude': 39.1,
          'duration': 890
        }, {
          'date': '2016-01-12',
          'distance': 534,
          'townName': 'Denver',
          'townName2': 'Denver',
          'townSize': 18,
          'latitude': 39.74,
          'duration': 810
        }, {
          'date': '2016-01-13',
          'townName': 'Salt Lake City',
          'townSize': 12,
          'distance': 425,
          'duration': 670,
          'latitude': 40.75,
          'alpha': 0.4
        }, {
          'date': '2016-01-14',
          'latitude': 36.1,
          'duration': 470,
          'townName': 'Las Vegas',
          'bulletClass': 'lastBullet'
        }
      ],
      'addClassNames': true,
      'startDuration': 1,
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'minPeriod': 'DD',
        'autoGridCount': false,
        'gridCount': 50,
        'gridAlpha': 0.1,
        'gridColor': '#FFFFFF',
        'axisColor': '#555555',
        'dateFormats': [ {
          'period': 'DD',
          'format': 'DD'
        }, {
          'period': 'WW',
          'format': 'MMM DD'
        }, {
          'period': 'MM',
          'format': 'MMM'
        }, {
          'period': 'YYYY',
          'format': 'YYYY'
        } ]
      },
      'valueAxes': [ {
        'id': 'a1',
        'title': 'distance',
        'gridAlpha': 0,
        'axisAlpha': 0
      }, {
        'id': 'a2',
        'position': 'right',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'labelsEnabled': false
      } ],
      'graphs': [ {
        'id': 'g1',
        'valueField': 'distance',
        'title': 'distance',
        'type': 'column',
        'fillAlphas': 0.9,
        'valueAxis': 'a1',
        'balloonText': '[[value]] miles',
        'legendValueText': '[[value]] mi',
        'legendPeriodValueText': 'total: [[value.sum]] mi',
        'lineColor': '#B3E5FC',
        'alphaField': 'alpha'
      }, {
        'id': 'g2',
        'valueField': 'latitude',
        'classNameField': 'bulletClass',
        'title': 'latitude/city',
        'type': 'line',
        'valueAxis': 'a2',
        'lineColor': '#ff6a07',
        'lineThickness': 1,
        'legendValueText': '[[value]]/[[description]]',
        'descriptionField': 'townName',
        'bullet': 'round',
        'bulletSizeField': 'townSize',
        'bulletBorderColor': '#ff6a07',
        'bulletBorderAlpha': 1,
        'bulletBorderThickness': 2,
        'bulletColor': '#ffb583',
        'labelText': '[[townName2]]',
        'labelPosition': 'right',
        'balloonText': 'latitude:[[value]]',
        'showBalloon': true,
        'animationPlayed': true
      }, {
        'id': 'g3',
        'title': 'duration',
        'valueField': 'duration',
        'type': 'line',
        'valueAxis': 'a3',
        'lineColor': '#64B5F6',
        'balloonText': '[[value]]',
        'lineThickness': 1,
        'legendValueText': '[[value]]',
        'bullet': 'square',
        'bulletBorderColor': '#64B5F6',
        'bulletBorderThickness': 1,
        'bulletBorderAlpha': 1,
        'dashLengthField': 'dashLength',
        'animationPlayed': true
      } ],
      'chartCursor': {
        'zoomable': false,
        'categoryBalloonDateFormat': 'DD',
        'cursorAlpha': 0,
        'valueBalloonsEnabled': false
      },
      'legend': {
        'bulletType': 'round',
        'equalWidths': false,
        'valueWidth': 120,
        'useGraphSettings': true
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-2', {
      "type": "serial",
      "theme": "dark",
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        "id": "v1",
        "title": "Sales",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value) + "M";
        }
      }, {
        "id": "v2",
        "title": "Market Days",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
      }],
      "graphs": [{
        "id": "g3",
        "valueAxis": "v1",
        "lineColor": "#e1ede9",
        "fillColors": "#e1ede9",
        "fillAlphas": 1,
        "type": "column",
        "title": "Actual Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        "lineColor": "#ff6a07",
        "fillColors": "#ffb583",
        "fillAlphas": 1,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#20acd4",
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#e1ede9",
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
      }],
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top"
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
      }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
      }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
      }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
      }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
      }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
      }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
      }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
      }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
      }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
      }]
    });
  }
}