import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ProfileComponent, LoginComponent, DeviceComponent],
  exports: [ProfileComponent, LoginComponent, DeviceComponent]
})
export class SharedModule { }
