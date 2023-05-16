import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6462506338a4e75006ce');

export const account = new Account(client)

// Database 
export const databases = new Databases(client)