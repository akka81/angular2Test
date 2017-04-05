import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './App';

import '../node_modules/toastr/build/toastr.min.css';
import './Styles/style.css'

platformBrowserDynamic().bootstrapModule(AppModule);