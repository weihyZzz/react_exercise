import { faker } from "@faker-js/faker";
const arrayData = [];
for (let i = 0; i < 10000; i++) {
  arrayData.push(faker.company.name());
}

export default arrayData;
