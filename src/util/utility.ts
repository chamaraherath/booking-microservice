import { v4 as uuidv4 } from 'uuid';

export class UtilManager {

    constructor(public json: JSON) { }

    /**
     * 
     * @returns random stirng uuid
     */
    static getRandomString(): string {
        try {
            return uuidv4();
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param json 
     * @returns sting
     */
    static toJsonStringify(json: any): string {
        try {
            return JSON.stringify(json);
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param json 
     * @returns JSON
     */
    static toJson(json: string): JSON {
        try {
            return JSON.parse(json);
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @returns datetime - tring yyyy-mm-dd hh:mm:ss
     */
    static getCurrentTime() {
        try {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            return formattedTime;
        } catch (error) {
            throw new Error(error);
        }
    }

    static getUTCTime(date:Date){
        try {
            return new Date(date).toUTCString()
        } catch (error) {
            
        }
    }

    static formatDate(date:any){
        try {
            const now = new Date(date);
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const formattedTime = `${year}-${month}-${day}`;
            return formattedTime;
        } catch (error) {
            throw new Error(error);
        }
    }
        
}