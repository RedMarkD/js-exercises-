const currentList = [
    'GATE TO HEAVEN',
    'TOUT S’EST BIEN PASSÉ',
    'HERSELF',
    "DUNE",
    "DÉLICIEUX",
    'BENEDETTA',
    'RESPECT',
    'TITANE',
    'GIVE ME LIBERTY',
    'UNE VIE DÉMENTE',
    'PAW PATROL: DE FILM',
    'WOLFWALKERS']

const wrapWithTag = (content, tagname) => {
    document.write(`<${tagname}>${content}</${tagname}>`);
}

document.write('<ul>')
currentList.forEach(film => wrapWithTag(film, 'li'))
document.write('</ul>')
