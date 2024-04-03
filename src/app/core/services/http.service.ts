import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 在请求发送之前做一些处理
        console.log('Intercepted request:', request);

        // 继续请求
        return next.handle(request).pipe(
            // 在收到响应后做一些处理
            map((event: any) => {
                console.log('Intercepted response:', event);
                return event;
            })
        );
    }
}
