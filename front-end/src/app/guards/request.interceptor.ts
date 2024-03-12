import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserStore } from '../stores/user/user.store';
import { Router } from '@angular/router';
import { access } from '@graphql-codegen/cli/typings/utils/file-system';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const userStore = inject(UserStore);
  const router = inject(Router);
  let modifiedRequest = req;

  if (req.url.includes('/graphql') && req.method === 'POST' && req.body) {
    const body = req.body as any;

    if (body.operationName === 'login') {
      modifiedRequest = req;
    } else {
      const accessToken = userStore.accessToken();
      if (!accessToken) {
        router.createUrlTree(['sign-in']);
      } else {
        modifiedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
    }
  }

  return next(modifiedRequest);
};
