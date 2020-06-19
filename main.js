 // Contributors Gretchen Harris, Kola, Gamma Ortiz
 
 const parentElement = document.querySelector('.katas-list')
 const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];


const kata1Heading = document.createElement('h3')
parentElement.append(kata1Heading)
kata1Heading.append('KATA 1')

    for(let counter = 1; counter <= 20; counter += 1){
        const kata1Result = document.createElement('h3')
  parentElement.append(kata1Result)
  kata1Result.append(counter)
  }

   const kata2Heading = document.createElement('h3')
  parentElement.append(kata2Heading)
  kata2Heading.append('KATA 2') 

    for(let counter2 = 2; counter2 <= 20; counter2 += 2){
        const kata2Result = document.createElement('h3')
  parentElement.append(kata2Result)
  kata2Result.append(counter2)
  }

 const kata3Heading = document.createElement('h3')
  parentElement.append(kata3Heading)
  kata3Heading.append('KATA 3')

  for(let counter3 = 1; counter3 <= 20; counter3 += 2){
    const kata3Result = document.createElement('h3')
    parentElement.append(kata3Result)
    kata3Result.append(counter3)
  }

  const kata4Heading = document.createElement('h3')
  parentElement.append(kata4Heading)
  kata4Heading.append('KATA 4')

  for(let counter4 = 5; counter4 <= 100; counter4 +=5){
    const kata4Result = document.createElement('h3')
    parentElement.append(kata4Result)
    kata4Result.append(counter4)
  }

  const kata5Heading = document.createElement('h3')
  parentElement.append(kata5Heading)
  kata5Heading.append('KATA 5')

  for(let counter5 = 1; counter5 <= 10; counter5 += 1){
    const kata5Result = document.createElement('h3')
    parentElement.append(kata5Result)
    kata5Result.append(counter5 * counter5)
  }

  const kata6Heading = document.createElement('h3')
  parentElement.append(kata6Heading)
  kata6Heading.append('KATA 6')

  for(let counter6 = 20; counter6 >= 1; counter6 -= 1){
    const kata6Result = document.createElement('h3')
    parentElement.append(kata6Result)
    kata6Result.append(counter6)
  }

  const kata7Heading = document.createElement('h3')
  parentElement.append(kata7Heading)
  kata7Heading.append('KATA 7')

  for(let counter7 = 20; counter7 >= 1; counter7 -= 2){
    const kata7Result = document.createElement('h3')
    parentElement.append(kata7Result)
    kata7Result.append(counter7)
  }

  const kata8Heading = document.createElement('h3')
  parentElement.append(kata8Heading)
  kata8Heading.append('KATA 8')

  for(let counter8 = 19; counter8 >= 1; counter8 -= 2){
    const kata8Result = document.createElement('h3')
    parentElement.append(kata8Result)
    kata8Result.append(counter8)
  }

  const kata9Heading = document.createElement('h3')
  parentElement.append(kata9Heading)
  kata9Heading.append('KATA 9')

  for(let counter9 = 100; counter9 >= 1; counter9 -= 5){
    const kata9Result = document.createElement('h3')
    parentElement.append(kata9Result)
    kata9Result.append(counter9)
  }

  const kata10Heading = document.createElement('h3')
  parentElement.append(kata10Heading)
  kata10Heading.append('KATA 10')

  for(let counter10 = 10; counter10 >= 1; counter10 -= 1){
    const kata10Result = document.createElement('h3')
    parentElement.append(kata10Result)
    kata10Result.append(counter10 * counter10)
}

const kata11Heading = document.createElement('h3')
  parentElement.append(kata11Heading)
  kata11Heading.append('KATA 11')

  for(let counter11 = 1; counter11 < sampleArray.length; counter11 += 1) {
    const kata11Result = document.createElement('h3')
    parentElement.append(kata11Result)
    kata11Result.append(sampleArray[counter11])
  }

  const kata12Heading = document.createElement('h3')
  parentElement.append(kata12Heading)
  kata12Heading.append('KATA 12')

  for(let counter12 = 0; counter12 <= sampleArray.length; counter12 += 1) {
      if (sampleArray[counter12] % 2 === 0) {
    const kata12Result = document.createElement('h3')
    parentElement.append(kata12Result)
    kata12Result.append(sampleArray[counter12])
      }
  }

  const kata13Heading = document.createElement('h3')
  parentElement.append(kata13Heading)
  kata13Heading.append('KATA 13')

  for(let counter13 = 0; counter13 <= sampleArray.length; counter13 += 1) {
      if (sampleArray[counter13] % 2 === 1) {
      const kata13Result = document.createElement ('h3')
      parentElement.append(kata13Result)
      kata13Result.append(sampleArray[counter13])
      }
  }

  const kata14Heading = document.createElement('h3')
  parentElement.append(kata14Heading)
  kata14Heading.append('KATA 14')

  for(let counter14 = 10; counter14 < sampleArray.length; counter14 += 1) {
    const kata14Result = document.createElement ('h3')
    parentElement.append(kata14Result)
    kata14Result.append(sampleArray[counter14] * sampleArray[counter14])
  }

  const kata15Heading = document.createElement('h3')
  parentElement.append(kata15Heading)
  kata15Heading.append('KATA 15')
     let result15 = 0 
  for(let counter15 = 0; counter15 <= 20; counter15 += 1) {
        result15 += counter15
  }
  const kata15Result = document.createElement ('h3')
    parentElement.append(kata15Result)
    kata15Result.append(result15)

  const kata16Heading = document.createElement('h3')
  parentElement.append(kata16Heading)
  kata16Heading.append('KATA 16')
        let result16 = 0
  for(let counter16 = 0; counter16 < sampleArray.length; counter16 += 1) {
        result16 += sampleArray[counter16]
  }
  const kata16Result = document.createElement ('h3')
  parentElement.append(kata16Result)
  kata16Result.append(result16)

  const kata17Heading = document.createElement('h3')
  parentElement.append(kata17Heading)
  kata17Heading.append('KATA 17')

    const kata17Result = document.createElement ('h3')
    parentElement.append(kata17Result)
    kata17Result.append (Math.min(...sampleArray))


  const kata18Heading = document.createElement('h3')
  parentElement.append(kata18Heading)
  kata18Heading.append('KATA 18')

  
    const kata18Result = document.createElement ('h3')
    parentElement.append(kata18Result)
    kata18Result.append (Math.max(...sampleArray))   
  