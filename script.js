console.log("main.js çalışıyor...");

// // İlk ülkenin adını ve başkentini yazdıralım
// console.log("İlk ülke:", countries_data[0].name);
// console.log("Başkent:", countries_data[0].capital);

// // Tüm ülkeleri ekrana yazdıralım
// countries_data.forEach(country => {
//     console.log(`${country.name} - Başkent: ${country.capital}`);
// });

// // HTML'ye yazalım (Eğer HTML ile kullanıyorsan)
// document.body.innerHTML += "<h2>Ülkeler Listesi</h2>";
// countries_data.forEach(country => {
//     document.body.innerHTML += `<p><strong>${country.name}</strong>: ${country.capital}</p>`;
// });
function slice(data){
    const slicedData = data.slice(0,10)
    return slicedData
}
const languageFrequency = (countries) => {
    const languageCount = {};
  
    countries.forEach((country) => {
      country.languages.forEach((language) => {
        languageCount[language] = (languageCount[language] || 0) + 1;
      });
    });
  
    const sortedLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])
      .map(([language, count]) => ({ name: language, count: count }));
  
    return sortedLanguages;
};

  

const populationBtn = document.getElementById('population')
const languagesBtn = document.getElementById('languages')

const columnCountry = document.querySelector('.column-country')
const columnChart = document.querySelector('.column-chart')
const columnValue = document.querySelector('.column-value')

const maxValuePopulation = Math.max(...countries_data.map(item => item.population))


const buttonsTitles = document.querySelector('#buttons-titles')





populationBtn.addEventListener('click',() => {
    columnCountry.innerHTML = ''
    columnChart.innerHTML=''
    columnValue.innerHTML = ''

    const sortByPopulation = [...countries_data].sort((a, b)=> b.population - a.population)
    
    const slicedData = slice(sortByPopulation)
    console.log(slicedData)
    buttonsTitles.textContent = '10 Most populated countries in the world'
    slicedData.forEach(item =>{
        const textStyle = document.createElement('p')
        textStyle.className = 'text-style'
        textStyle.textContent = item.name

        const numberStyle = document.createElement('p')
        numberStyle.className = 'number-style'
        numberStyle.textContent = item.population

        const chartStyle = document.createElement('div');
        chartStyle.className = 'chart-style'
        chartStyle.style.width = ((item.population / maxValuePopulation) *100) + '%'
        
        
        columnChart.appendChild(chartStyle)
        columnValue.appendChild(numberStyle)
        columnCountry.appendChild(textStyle)

    })

   
})

languagesBtn.addEventListener('click',() =>{
    columnCountry.innerHTML = ''
    columnChart.innerHTML=''
    columnValue.innerHTML = ''
    
    const slicedData = slice(languageFrequency(countries_data))
    buttonsTitles.textContent = '10 Most spoken languages in the world'

    const maxValueLanguage = Math.max(...slicedData.map(item => item.count))
    console.log(slicedData)
    slicedData.forEach(item =>{
        const textStyle = document.createElement('p')
        textStyle.className = 'text-style'
        textStyle.textContent = item.name

        const numberStyle = document.createElement('p')
        numberStyle.className = 'number-style'
        numberStyle.textContent = item.count

        const chartStyle = document.createElement('div');
        chartStyle.className = 'chart-style'
        chartStyle.style.width = ((item.count / maxValueLanguage) *100) + '%'

        columnChart.appendChild(chartStyle)
        columnValue.appendChild(numberStyle)
        columnCountry.appendChild(textStyle)

        console.log(maxValueLanguage)
    })

})