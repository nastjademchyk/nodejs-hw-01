import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const existingContactsObject = await readContacts();
    const number = existingContactsObject.length;
    return number;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await countContacts());
