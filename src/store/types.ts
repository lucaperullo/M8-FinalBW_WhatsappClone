export interface Contact {
    id: string;
    name: string;
}


export interface Store {
    contacts: Contact[];
    newContact: Contact;
}