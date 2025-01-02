import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const existingContactsObject = await readContacts();
    const newContactObject = createFakeContact();
    existingContactsObject.push(newContactObject);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(existingContactsObject, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
