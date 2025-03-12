import { faker } from "@faker-js/faker";

export function generateRandomUser() {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
export function generateRandomAuthor() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };
}
export function generateRandomBook() {
  return {
  title: faker.lorem.sentence(),
  isbn: faker.number.int({ min: 1000000000000, max: 9999999999999 }).toString(),
  publishedYear: faker.number.int({ min: 1900, max: 2025 }),
  };
}
export function generateRandomPost() {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    imageUrl: faker.image.url({ width: 250, height: 400 }),
    status: faker.helpers.arrayElement(['draft', 'published']),
  };
}
export function generateRandomProfile() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    profilePictureUrl: faker.image.url({ width: 250, height: 400 }),
    bio: faker.lorem.paragraph(),
  };
}
