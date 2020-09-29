const aCar = {
  owner : "Joe Bloggs",
  address : '3 Walkers Lane',
  previous_owners: [
    {
      name: 'Pat Smith',
      address: '1 Main Street'
    },
    {
      name: 'Sheila Dwyer',
      address: '2 High Street'
    }
  ],
  type : {
    make: 'Toyota',
    model: 'Corolla',
    cc: '1.8'
  },
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
  registration : {
    year: 201,
    country_code: 'WD',
    number: 1058
  }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.country_code + '-' + aCar.registration.number);

// dynamic_properties
aCar.mileage = 10000;

aCar.color = {
  exterior: 'red',
  interior: {
    texture: 'leather',
    shade: 'cream'
  }
};

console.log('It is a ' + aCar.color.exterior + ' car,' + ' ' + aCar.mileage + ' mileage,' + ' with ' + aCar.color.interior.texture + ' interior')

// Arrays
// console.log('First owner : ' + aCar.previous_owners[0] )
console.log('First owner: ' + aCar.previous_owners[0].name + ' - ' + aCar.previous_owners[0].address)

// Looping/Iteration constructs
for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
} 

for (let index in aCar.previous_owners) {
  console.log(aCar.previous_owners[index].name)
}