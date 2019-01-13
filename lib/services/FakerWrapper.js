"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
class FakerWrapper {
    static execute() {
        return {
            id: faker.random.number(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.random.number(100),
            jobTitle: faker.name.jobTitle(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            number: faker.random.number(),
            string: faker.random.word(),
            zipCode: faker.address.zipCode(),
            city: faker.address.city(),
            cityPrefix: faker.address.cityPrefix(),
            citySuffix: faker.address.citySuffix(),
            streetName: faker.address.streetName(),
            streetAddress: faker.address.streetAddress(),
            streetSuffix: faker.address.streetSuffix(),
            streetPrefix: faker.address.streetPrefix(),
            secondaryAddress: faker.address.secondaryAddress(),
            county: faker.address.county(),
            country: faker.address.country(),
            countryCode: faker.address.countryCode(),
            state: faker.address.state(),
            stateAbbr: faker.address.stateAbbr(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            color: faker.commerce.color(),
            department: faker.commerce.department(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            productAdjective: faker.commerce.productAdjective(),
            productMaterial: faker.commerce.productMaterial(),
            product: faker.commerce.product(),
            suffixes: faker.company.suffixes(),
            companyName: faker.company.companyName(),
            companySuffix: faker.company.companySuffix(),
            catchPhrase: faker.company.catchPhrase(),
            bs: faker.company.bs(),
            catchPhraseAdjective: faker.company.catchPhraseAdjective(),
            catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
            catchPhraseNoun: faker.company.catchPhraseNoun(),
            bsAdjective: faker.company.bsAdjective(),
            bsBuzz: faker.company.bsBuzz(),
            bsNoun: faker.company.bsNoun(),
        };
    }
}
exports.FakerWrapper = FakerWrapper;
