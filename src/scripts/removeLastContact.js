import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    console.log(currentContacts);
    currentContacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(currentContacts, null, 2));
  } catch (error) {}
};

removeLastContact();
