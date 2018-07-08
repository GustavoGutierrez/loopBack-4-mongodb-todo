import { juggler, AnyObject } from '@loopback/repository';
export declare class db extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
