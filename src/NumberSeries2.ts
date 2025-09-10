import { NumberSeries, type BaseOp } from "./NumberSeries.js";

export class NumberSeries2 extends NumberSeries{
    div(){
        return this._list[0];
    }

    override mode(): number{
        const statistic: Record<number,number> = {};
        for(let n of this._list){
            statistic[n] = (statistic[n] ?? 0) + 1;
        }

        let best = this._list[0];
        for (const k in statistic){
            const key = Number(k);
            if(statistic[key]! > statistic[best!]!){
                best = key;
            }
        }
        return best!;
    }

}

const s = new NumberSeries2(10,4)