import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localVi from '@angular/common/locales/vi';
import localEn from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/index';
import {FlexLayoutModule} from '@angular/flex-layout';
import { customHttpProvider, NullDefaultValueDirective } from './_helpers/index';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { StatisticSerivce,
  AuthenticationService, AlertService, MotelService, CommentService, LocationService, LevelService } from './_services/index';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule, } from '@angular/material';

import { AlertComponent } from './_directives/index';
import { AppComponent } from './app.component';
import { NavComponent } from './main/layout/nav/nav.component';
import { SearchComponent } from './main/layout/search/search.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/layout/footer/footer.component';
import { RecentPostComponent } from './main/layout/recent-post/recent-post.component';
import { LoginComponent, RegisterDialog } from './main/login/login.component';
import { ItemComponent, UserContactDialog } from './main/item/item.component';
import { MapComponent } from './main/layout/map/map.component';

import { UserInfoComponent } from './main/layout/user-info/user-info.component';
import { CommentListComponent } from './main/layout/comment-list/comment-list.component';
import { ShowMapComponent } from './main/layout/show-map/show-map.component';
import { CommentBoxComponent } from './main/layout/comment-box/comment-box.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FailPageComponent } from './main/layout/fail-page/fail-page.component';
import { FormComponent, DialogOverviewExampleDialog } from './form/form.component';
import { MapServiceComponent } from './main/layout/map-service/map-service.component';

import { AdvanceSearchComponent } from './main/layout/advance-search/advance-search.component';
import { MapMarkerMoveComponent } from './main/layout/map-marker-move/map-marker-move.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'add', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'advance', component: AdvanceSearchComponent},
  { path: 'user', loadChildren: 'app/user/user-interface/user.module#UserModule'},
  { path: 'login', component: LoginComponent},
  { path: 'item/:id', component: ItemComponent},
  {
    path: 'admin',
    loadChildren: 'app/admin/admin-page/admin.module#AdminModule'
  },
  { path: 'show-map', component: ShowMapComponent},
  { path: 'fail', component: FailPageComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
registerLocaleData(localVi);
registerLocaleData(localEn);
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    NavComponent,
    SearchComponent,
    HomeComponent,
    FooterComponent,
    RecentPostComponent,
    LoginComponent, RegisterDialog,
    ItemComponent, UserContactDialog,
    MapComponent,
    UserInfoComponent,
    CommentListComponent,
    ShowMapComponent,
    CommentBoxComponent,
    FileSelectDirective,
    FailPageComponent,
    FormComponent, DialogOverviewExampleDialog, MapServiceComponent,
    AdvanceSearchComponent, MapMarkerMoveComponent
    ],
    entryComponents: [FormComponent, DialogOverviewExampleDialog, ItemComponent, UserContactDialog, LoginComponent, RegisterDialog],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAslxy4f_o9CBtV-gh2iT8ZMyR0RoKP_UQ',
      libraries: ['places']
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmSnazzyInfoWindowModule,
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    LevelService,
    StatisticSerivce,
    AuthenticationService,
    AlertService,
    LocationService,
    customHttpProvider,
    NullDefaultValueDirective, MotelService, CommentService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'vi' } ],
  bootstrap: [AppComponent]
})


export class AppModule { }
