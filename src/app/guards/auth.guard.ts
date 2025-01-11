import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localUser = localStorage.getItem('empErpUser');
  /*   const currentUrl = router.url;

  console.log(currentUrl);

  // If the user is logged in and trying to access /login, redirect to /home
  if (localUser && currentUrl === '/') {
    debugger;
    router.navigateByUrl('/master');
    return true;
  } */

  // If the user is not logged in and accessing protected routes
  if (localUser === null) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
