import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localUser = localStorage.getItem('empErpUser');
  if (localUser == null) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
