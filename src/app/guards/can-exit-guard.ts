import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if(component.hasChanges){
    alert('Please save the page!')
    return false;
  }
  else{
    return true;
  }
};
