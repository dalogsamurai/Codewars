function getModelData(modelLink) {
  return fetch(`https://itboat.com${modelLink}`)
    .then((data) => data.text())
    .then((content) => {
      const div = document.createElement('div')
      div.innerHTML = content.trim()
      const regExpToDel = /^ |<br>|<span>|\(unloaded\)|<\/span>|\\n/g
      //   const regExpToChange = /A/g

      let length = 0
      let width = 0
      let draft = 0

      Array.from(
        div.getElementsByClassName('shipyard-model__main-chars-item'),
      ).map((baseParameter) => {
        const title = (
          Array.from(
            baseParameter.getElementsByClassName(
              'shipyard-model__main-chars-title',
            ),
          )[0] || {}
        ).innerHTML
        const value = (
          Array.from(
            baseParameter.getElementsByClassName(
              'shipyard-model__main-chars-meter',
            ),
          )[0] || { innerHTML: '' }
        ).innerHTML
          .split('</span>')[0]
          .replace('<span>', '')

        if (title.includes('Length')) {
          length = +value
        }

        if (title.includes('Width')) {
          width = +value
        }

        if (title.includes('Draft')) {
          draft = +value
        }
      })

      const otherParameters = Array.from(
        div.getElementsByClassName('shipyard-chars-table__row'),
      ).map((otherParameter) => {
        const titleEl = Array.from(
          otherParameter.getElementsByClassName(
            'shipyard-chars-table__text shipyard-chars-table__text_mobile-title',
          ),
        )[0].innerHTML
        const valueEl = (
          Array.from(
            otherParameter.getElementsByClassName('shipyard-chars-table__text'),
          )[1] || { innerHTML: '' }
        ).innerHTML

        let [title, measure] = titleEl
          .replace('\n', '')
          .replace(regExpToDel, '')
          .split(',')
        title = title
          .trim()
          .split(' ')
          .map((subStr) => subStr[0].toUpperCase() + subStr.slice(1))
          .join('')
        title = title[0].toLocaleLowerCase() + title.slice(1)

        measure = measure ? measure.trim() : undefined

        const isNumberRegExp = /^\d+$/

        let value = valueEl.replace('\n', '').replace(regExpToDel, '').trim()

        if (isNumberRegExp.test(value)) {
          value = +value
        }
        return {
          title,
          measure,
          value,
        }
      })

      const modelParameters = {
        width,
        length,
        draft,
        otherParameters,
      }

      return modelParameters
    })
}

const newArr = []
for (let i = 0; i < 1; i++) {
  const country = data[i]
  const newCountry = { ...country, manufacturers: [] }
  for (let j = 0; j < country.manufacturers.length; j++) {
    const manufacturer = country.manufacturers[j]
    const newManufacturer = { name: manufacturer.name, models: [] }
    for (let k = 0; k < manufacturer.models.length; k++) {
      const modelLink = manufacturer.models[k]
      const data = await getModelData(modelLink.link)
      newManufacturer.models.push({
        name: modelLink.name,
        ...data,
      })
    }
    newCountry.manufacturers.push(newManufacturer)
  }
  newArr.push(newCountry)
}

console.log(newArr)
