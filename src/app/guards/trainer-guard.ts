import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService)
  if(userInfoService.getUserRole() === 'trainer'){
    return true;
  }
  else{
    alert('Sorry! You are not authorized to access this page.')
    return false;
  }
};
