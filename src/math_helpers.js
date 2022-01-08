export function sqrt(x){
    return Math.sqrt(x);
}
export function sq(x){
    return Math.pow(x,2);
}
export function atan(x){
    return Math.atan(x);
}
export function atan2(y,x){
    return Math.atan2(y,x);
}
export function asin(x){
    return Math.asin(x);
}
export function sin(x){
    return Math.sin(x);
}
export function cos(x){
    return Math.cos(x);
}
export function tan(x){
    return Math.tan(x);
}
export function round(x){
    return Math.round(x);
}
export function roundTo(x,places){
    var rounder = pow(10,places);
    return round(x * rounder)/rounder;
}

export function floor(x){
    return Math.floor(x);
}
export function ceil(x){
    return Math.ceil(x);
}

export function max(x,y){
    return Math.max(x,y);
}
export function min(x,y){
    return Math.min(x,y);
}
export function mid(x,y){
    return x + (y - x)/2;
}
export function between(min,max,n){
    return line_y(n,min,min,max);
}
export function inverse_between(min,max,val){
    return 1 - (max - val)/(max - min);
}
export function limit(l_bound,u_bound,x){
    var l = min(l_bound,u_bound);
    var u = max(l_bound,u_bound);
    return min(u,max(l,x));
}

export function exp(x){
    return Math.exp(x);
}

export function log(x){
    return Math.log(x);
}
export function pow(x,n){
    return Math.pow(x,n);
}
export function log_10(x){
    return log(x)/log(10);
}

export function abs(x){
    return Math.abs(x);
}
export function dir(x){
    return x/abs(x);
}
export function dif(x,y){
    return abs(x - y);
}

export function pi(){
    return Math.PI;
}
export function radToDeg(angle){
    return angle*180/pi();
}
export function degToRad(angle){
    return angle*pi()/180;
}

export function toDeg(angle){
    return radToDeg(angle);
}
export function toRad(angle){
    return degToRad(angle);
}

export function line_y(m,x0,y0,x){
    return m * (x - x0) + y0;
}
export function quadratic_formula(A,B,C){
    var desc = sq(B) - 4 * A * C;
    var solutions = [];
    if(desc > 0){
        //2 real solutions
        solutions[0] = (-B + sqrt(desc))/(2 * A);
        solutions[1] = (-B - sqrt(desc))/(2 * A);
    }else if(desc === 0){
        //1 real solution
        solutions[0] = (-B + sqrt(desc))/(2 * A)
    }else{
        //No real solutions
    }
    return solutions;
}

export function distance_between(x1,y1,x2,y2){
    return sqrt(sq(x2 - x1) + sq(y2 - y1));
}


export function line_y_fromPoints(x1,y1,x2,y2,x){
    var m = (y2 - y1)/(x2 - x1);
    return line_y(m,x1,y1,x);
}
