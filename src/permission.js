import router from './router';
import { getToken  } from './utils/token';

router.beforeEach((to, from, next)=>{
    const token = getToken()
    if(token) {
        next()
    } else if (to.path === '/login') {
        next()
    } else {
        next({path: `login?redirect=${to.path}`})
    }
})