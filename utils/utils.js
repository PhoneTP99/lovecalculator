export const removeSameValue = (arr) => {
    return [...new Set(arr)];
}

export const showHtml = (totalPercentage) => {
    if ( totalPercentage <= 20) {
        document.querySelector('.result-box').innerHTML = `
        <p>Only GOD can save you</p><p>${totalPercentage}%</p>`  
       } else if ( totalPercentage > 20 && totalPercentage <= 40) {
        document.querySelector('.result-box').innerHTML = `
        <p>In case you don't know, so many fishes in the sea</p><p>${totalPercentage}%</p>`
       } else if ( totalPercentage > 40 && totalPercentage <= 80) {
        document.querySelector('.result-box').innerHTML = `
        <p>Great , but take care , EVERYTHING can happen at any time</p><p>${totalPercentage}%</p>`
       } else {
        document.querySelector('.result-box').innerHTML = `
        <p>Don't trust on number. You two can still breakup and will be.</p><p>${totalPercentage}%</p>`
       }
}