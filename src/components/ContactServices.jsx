import axios from "axios";

export class ContactServices{
    static serverUrl = "http://localhost:7000"
    static getAllContacts(){
        let dataUrl=` ${this.serverUrl}/contacts` 
        return axios.get(dataUrl);
    }
    static getContact(contactID){
        let dataUrl=`${this.serverUrl}/contacts/${contactID}`
        return axios.get(dataUrl);
    }
}